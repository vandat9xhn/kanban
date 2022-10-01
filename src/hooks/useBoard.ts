import { useEffect, useState } from "react";
import * as queryString from "query-string";

import {
  handleCreateBoardType,
  handleCreateCardType,
  handleDndType,
  openModalViewTaskType,
  useBoardState,
} from "../types";
import { handle_API_Board_C, handle_API_Board_R } from "../api/handle/board";
import { handle_API_SPACEInfo_R } from "../api/handle/space";
import { getNewStateDndEnd } from "../utils/getNewStateDndEnd";
import { getNewStateAddCard } from "../utils/getNewStateAddCard";
import { handle_API_Card_C } from "../api/handle/card";
import { handle_API_Column_C } from "../api/handle/column";
import { useNavigate } from "react-router";

type AddKeyModal = keyof Omit<useBoardState["modal"], "view_task">;

//
export const useBoard = ({ id_space = 0 }) => {
  //
  const navigate = useNavigate();

  //
  const [state_obj, setStateObj] = useState<useBoardState>({
    space_info: { id: 0, name: "", boards: [] },
    boards: {},
    id_board: 0,

    fetched: false,
    fetching: false,

    modal: {
      add_board: false,
      add_column: false,
      add_task: false,
      view_task: {
        ix_col_view_task: -1,
        ix_card_view_task: -1,
      },
    },
  });

  //
  useEffect(() => {
    getSpaceInfo();
  }, []);

  useEffect(() => {
    const id_board = queryString.parse(location.search)["id_board"] as string;
    getBoard({ id_board: parseInt(id_board) });
  }, [location.search]);

  // ----

  const getSpaceInfo = async () => {
    const res = await handle_API_SPACEInfo_R({ id: id_space });

    setStateObj((state_obj) => {
      return {
        ...state_obj,
        space_info: {
          id: res.data.id,
          name: res.data.name,
          boards: res.data.boards.map((item) => ({
            id: item.id,
            name: item.name,
          })),
        },
      };
    });
  };

  const getBoard = async ({ id_board = 0 }) => {
    if (state_obj.boards[id_board]) {
      setStateObj((state_obj) => {
        return {
          ...state_obj,
          id_board: id_board,
        };
      });

      return;
    }

    setStateObj((state_obj) => {
      return {
        ...state_obj,
        fetching: true,
      };
    });

    const res = await handle_API_Board_R({ id: id_board });

    if (!res.data) {
      navigate("/space/1?id_board=1", { replace: true });
      return;
    }

    setStateObj((state_obj) => {
      return {
        ...state_obj,
        boards: { [id_board]: res.data },
        id_board: id_board,
        fetched: true,
        fetching: false,
      };
    });
  };

  // -----

  const getNewModalAdd = (
    state_obj: useBoardState,
    add_key: AddKeyModal,
    open: boolean
  ) => {
    const new_modal = { ...state_obj.modal };
    new_modal[add_key] = open;

    return new_modal;
  };

  const getCloseModalAdd = (state_obj: useBoardState, add_key: AddKeyModal) => {
    return getNewModalAdd(state_obj, add_key, false);
  };

  const toggleModalAdd = (add_key: AddKeyModal, open = true) => {
    setStateObj((state_obj) => {
      return {
        ...state_obj,
        modal: getNewModalAdd(state_obj, add_key, open),
      };
    });
  };

  // -----

  //  BOARD

  const toggleModalAddBoard = (open = true) => {
    toggleModalAdd("add_board", open);
  };

  const openModalAddBoard = () => {
    toggleModalAddBoard(true);
  };

  const closeModalAddBoard = () => {
    toggleModalAddBoard(false);
  };

  const handleCreateBoard: handleCreateBoardType = async ({ name = "" }) => {
    const res = await handle_API_Board_C({ name });
    const new_id_board = res.data.id;

    setStateObj((state_obj) => {
      const new_boards = { ...state_obj.boards };
      const new_space_info = { ...state_obj.space_info };
      new_boards[new_id_board] = { id: new_id_board, name: name, columns: [] };
      new_space_info.boards.push({ id: new_id_board, name: name });

      return {
        ...state_obj,
        space_info: new_space_info,
        boards: new_boards,
        modal: getCloseModalAdd(state_obj, "add_board"),
      };
    });

    history.replaceState(
      history.state,
      "",
      `/space/1?id_board=${new_id_board}`
    );
  };

  const deleteBoard = ({ id_board = 0 }) => {};

  // COLUMN

  const toggleModalAddColumn = (open = true) => {
    toggleModalAdd("add_column", open);
  };

  const openModalAddColumn = () => {
    toggleModalAddColumn(true);
  };

  const closeModalAddColumn = () => {
    toggleModalAddColumn(false);
  };

  const handleCreateColumn = async ({ name = "" }) => {
    const res = await handle_API_Column_C({ name });

    setStateObj((state_obj) => {
      const new_boards = { ...state_obj.boards };
      new_boards[state_obj.id_board].columns.push({
        id: res.data.id,
        name: name,
        cards: [],
      });

      return {
        ...state_obj,
        boards: new_boards,
        modal: getCloseModalAdd(state_obj, "add_column"),
      };
    });
  };

  const deleteColumn = ({ id_column }) => {};

  // TASK

  const toggleModalAddTask = (open = true) => {
    toggleModalAdd("add_task", open);
  };

  const openModalAddTask = () => {
    if (state_obj.boards[state_obj.id_board].columns.length === 0) {
      alert("No column to add a task! Please, create a column");
      return;
    }

    toggleModalAddTask(true);
  };

  const closeModalAddTask = () => {
    toggleModalAddTask(false);
  };

  const handleCreateCard: handleCreateCardType = async ({
    title,
    description,
    status_task,
    subtasks,
  }) => {
    setStateObj((state_obj) => ({
      ...state_obj,
      fetching: true,
    }));

    const { data } = await handle_API_Card_C({
      title,
      description,
      status_task,
      subtasks,
    });

    setStateObj((state_obj) => {
      return {
        ...getNewStateAddCard({
          ...data,
          status_task,
          state_obj,
        }),
        fetching: false,
        modal: getCloseModalAdd(state_obj, "add_task"),
      };
    });
  };

  const deleteCard = ({ id_card = "" }) => {};

  // VIEW TASK

  const openModalViewTask: openModalViewTaskType = (id_view_task) => {
    setStateObj((state_obj) => {
      const columns = state_obj.boards[state_obj.id_board].columns;
      const ix_col_view_task = columns.findIndex(
        (item) => item.id === parseInt(id_view_task.split("_")[0])
      );
      const ix_card_view_task = columns[ix_col_view_task].cards.findIndex(
        (item) => item.id === parseInt(id_view_task.split("_")[1])
      );

      const new_modal = { ...state_obj.modal };
      new_modal.view_task = {
        ix_col_view_task: ix_col_view_task,
        ix_card_view_task: ix_card_view_task,
      };

      return {
        ...state_obj,
        modal: new_modal,
      };
    });
  };

  const closeModalViewTask = () => {
    setStateObj((state_obj) => {
      const new_modal = { ...state_obj.modal };
      new_modal.view_task = {
        ix_col_view_task: -1,
        ix_card_view_task: -1,
      };

      return {
        ...state_obj,
        modal: new_modal,
      };
    });
  };

  //

  const handleDnd: handleDndType = ({
    id_source,
    ix_source_card,
    id_des,
    ix_des_card,
  }) => {
    setStateObj((state_obj) => {
      return getNewStateDndEnd({
        id_source,
        ix_source_card,
        id_des,
        ix_des_card,
        state_obj,
      });
    });
  };

  // ---

  return {
    ...state_obj,

    openModalAddBoard,
    closeModalAddBoard,
    handleCreateBoard,
    deleteBoard,

    openModalAddColumn,
    closeModalAddColumn,
    handleCreateColumn,
    deleteColumn,

    openModalAddTask,
    closeModalAddTask,
    handleCreateCard,
    deleteCard,

    openModalViewTask,
    closeModalViewTask,
    handleDnd,
  };
};

//
export type useBoardReturn = ReturnType<typeof useBoard>;
