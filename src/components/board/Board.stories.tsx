import * as React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import { contextBoard } from "../../context/board/contextBoard";
import "../../styles/styles.scss";
import { handleCreateCardType, useBoardState } from "../../types";
// import pc from "../../../design/pc.jpg";
// import mb from "../../../design/mb.jpg";
import new_task from "../../../design/new_task.jpg";
import view_task from "../../../design/view_task.jpg";
import { handle_API_Card_C } from "../../api/handle/card";
import { DEFAULT_ARR_SPACE } from "../../default/space";
import { getNewStateAddCard } from "../../utils/getNewStateAddCard";
import { getNewStateDndEnd } from "../../utils/getNewStateDndEnd";
import Board from "./Board";
import { IS_MOBILE } from "../../constant";

const space = DEFAULT_ARR_SPACE[0];

let state_obj: useBoardState = false
  ? {
      space_info: { id: space.id, name: "", boards: [] },
      boards: {},
      id_board: 0,

      fetched: false,
      fetching: false,

      ix_col_view_task: 0,
      ix_card_view_task: 0,
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

      ix_col_view_task: 0,
      ix_card_view_task: 0,
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
  handleCreateCard: async ({
    title,
    description,
    status_task,
    subtasks,
  }: Parameters<handleCreateCardType>[0]) => {
    const { data } = await handle_API_Card_C({
      title,
      description,
      status_task,
      subtasks,
    });

    getNewStateAddCard({
      ...data,
      status_task,
      state_obj,
    });
  },

  openModalViewTask: (id_view_task = "") => {
    console.log(id_view_task);
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
  //
  React.useLayoutEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = "1";

    if (IS_MOBILE) {
      html.classList.add("device-mobile");
    }
  }, []);

  return (
    <contextBoard.Provider value={value as null}>
      <Board />
      {/* <img style={{ width: "100%" }} src={pc} alt="" /> */}
      {/* <img style={{ width: "100%" }} src={mb} alt="" /> */}
      <img style={{ width: "100%" }} src={new_task} alt="" />
      <img style={{ width: "100%" }} src={view_task} alt="" />
    </contextBoard.Provider>
  );
};
