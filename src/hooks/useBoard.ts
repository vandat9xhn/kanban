import { useEffect, useState } from "react";
import * as queryString from "query-string";

import { handleDndType, useBoardState } from "../types";
import { handle_API_Board_R } from "../api/handle/board";
import { handle_API_SPACEInfo_R } from "../api/handle/space";
import { getNewStateDndEnd } from "../utils/getNewStateDndEnd";

//
export const useBoard = ({ id_space = 0 }) => {
  //
  const [state_obj, setStateObj] = useState<useBoardState>({
    space_info: { id: 0, name: "", boards: [] },
    boards: {},
    id_board: 0,

    fetched: false,
    fetching: false,
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

  const createCard = ({ title = "" }) => {};

  const deleteCard = ({ id_card = "" }) => {};

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

    createBoard,
    deleteBoard,

    createColumn,
    deleteColumn,
    createCard,
    deleteCard,

    handleDnd,
  };
};

//
export type useBoardReturn = ReturnType<typeof useBoard>;
