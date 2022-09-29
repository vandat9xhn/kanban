import * as React from "react";
import { withRouter } from "storybook-addon-react-router-v6";

import * as arr_space from "../../../default/space.json";

import { Space } from "../../types";
import { contextBoard } from "../../context/board/contextBoard";
import "../../styles/styles.scss";
import pc from "../../../design/pc.jpg";
import mb from "../../../design/mb.jpg";
import view_task from "../../../design/view_task.jpg";
import new_task from "../../../design/new_task.jpg";

import Board from "./Board";
import { getNewStateDndEnd } from "../../utils/getNewStateDndEnd";

const space = arr_space[0] as Space;

let state_obj = false
  ? {
      space_info: { id: space.id, name: "", boards: [] },
      boards: {},
      id_board: 0,

      fetched: false,
      fetching: false,
    }
  : {
      space_info: {
        id: space.id,
        name: space.name,
        boards: space.boards.map((item) => ({
          id: item.id,
          name: item.name,
        })),
      },
      boards: { [space.boards[0].id]: space.boards[0] },
      id_board: space.boards[0].id,

      fetched: true,
      fetching: false,
    };

//
const value = {
  ...state_obj,
  handleDnd: ({ id_source, ix_source_card, id_des, ix_des_card }) => {
    state_obj = getNewStateDndEnd({
      id_source,
      ix_source_card,
      id_des,
      ix_des_card,
      state_obj,
    });
  },
};

//
export default {
  title: "",
  component: Board,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: `/space/${value.space_info.id}`,
      routeParams: { id_board: value.space_info.boards[0].id },
    },
  },
};

export const BoardSb = () => {
  return (
    <contextBoard.Provider value={value as null}>
      <Board />
      {/* <img style={{ width: "100%" }} src={pc} alt="" /> */}
      {/* <img style={{ width: "100%" }} src={mb} alt="" />
      <img style={{ width: "100%" }} src={new_task} alt="" />
      <img style={{ width: "100%" }} src={view_task} alt="" /> */}
    </contextBoard.Provider>
  );
};
