import { useEffect, useState } from "react";
import * as queryString from "query-string";

import {
  handleCreateCardType,
  handleDndType,
  openModalViewTaskType,
  useBoardState,
} from "../types";
import { handle_API_Board_R } from "../api/handle/board";
import { handle_API_SPACEInfo_R } from "../api/handle/space";
import { getNewStateDndEnd } from "../utils/getNewStateDndEnd";
import { getNewStateAddCard } from "../utils/getNewStateAddCard";
import { handle_API_Card_C } from "../api/handle/card";

//
export const useBoard = ({ id_space = 0 }) => {
  //
  const [state_obj, setStateObj] = useState<useBoardState>({
    space_info: { id: 0, name: "", boards: [] },
    boards: {},
    id_board: 0,

    fetched: false,
    fetching: false,

    ix_col_view_task: -1,
    ix_card_view_task: -1,
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
    setStateObj((state_obj) => {
      return {
        ...state_obj,
        fetching: true,
      };
    });

    const res = await handle_API_Board_R({ id: id_board });

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

  const createBoard = ({ name = "" }) => {};

  const deleteBoard = ({ id_board = 0 }) => {};

  //

  const createColumn = ({ name = "" }) => {};

  const deleteColumn = ({ id_column }) => {};

  //

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
      };
    });
  };

  const deleteCard = ({ id_card = "" }) => {};

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

  const openModalViewTask: openModalViewTaskType = (id_view_task) => {
    setStateObj((state_obj) => {
      const columns = state_obj.boards[state_obj.id_board].columns;
      const ix_col_view_task = columns.findIndex(
        (item) => item.id === parseInt(id_view_task.split("_")[0])
      );
      const ix_card_view_task = columns[ix_col_view_task].cards.findIndex(
        (item) => item.id === parseInt(id_view_task.split("_")[1])
      );

      return {
        ...state_obj,
        ix_col_view_task: ix_col_view_task,
        ix_card_view_task: ix_card_view_task,
      };
    });
  };

  const closeModalViewTask = () => {
    setStateObj((state_obj) => ({
      ...state_obj,
      ix_card_view_task: -1,
      ix_col_view_task: -1,
    }));
  };

  //

  // ---

  return {
    ...state_obj,

    createBoard,
    deleteBoard,

    createColumn,
    deleteColumn,

    handleCreateCard,
    deleteCard,

    handleDnd,
    openModalViewTask,
    closeModalViewTask,
  };
};

//
export type useBoardReturn = ReturnType<typeof useBoard>;
