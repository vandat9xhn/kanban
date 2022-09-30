import * as React from "react";

import { contextBoard } from "../../../context/board/contextBoard";
import { useHidden } from "../../../hooks/useHidden";

import IconKanban from "../../../icons/kanban/IconKanban";

import "./BoardMb.scss";

import BoardColumns from "../main/columns/BoardColumns";
import BoardSideBarMain from "../side_bar/main/BoardSideBarMain";

//
export interface BoardMbProps {}

//
function BoardMb({}: BoardMbProps) {
  //
  const { boards, id_board } = React.useContext(contextBoard);

  //
  const { hidden, toggleSideBar } = useHidden();

  //
  return (
    <div className="BoardMb">
      <div className="BoardMb_header pos-rel">
        <div
          className="BoardMb_header_row flex items-center space-between"
          onClick={toggleSideBar}
        >
          <div className="grow-1 flex items-center overflow-hidden">
            <div className="shrink-0">{">"}</div>

            <div className="BoardMb_icon_kanban shrink-0">
              <IconKanban />
            </div>

            <div className="BoardMb_name">{boards[id_board].name}</div>
          </div>

          <div className="BoardMb_create_task flex-center shrink-0">
            <span className="BoardMb_create_task_text">+</span>
          </div>
        </div>

        <div className={`BoardMb_sidebar ${hidden ? "display-none" : ""}`}>
          <BoardSideBarMain />
        </div>
      </div>

      <div className="BoardMb_columns">
        <BoardColumns />
      </div>
    </div>
  );
}

export default BoardMb;
