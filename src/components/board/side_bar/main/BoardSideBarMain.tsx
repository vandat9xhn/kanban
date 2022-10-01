import * as React from "react";

import { IS_MOBILE } from "../../../../constant";
import { contextBoard } from "../../../../context/board/contextBoard";

import LightMode from "../../../light_mode/LightMode";

import "./BoardSideBarMain.scss";

import BoardSideBarBoard from "./board/BoardSideBarBoard";
import BoardSidebarToggle, {
  BoardSidebarToggleProps,
} from "./toggle/BoardSidebarToggle";

//
export interface BoardSideBarMainProps {
  hideSideBar?: BoardSidebarToggleProps["hideSideBar"];
}

//
function BoardSideBarMain({ hideSideBar }: BoardSideBarMainProps) {
  const { space_info, id_board, openModalAddBoard } =
    React.useContext(contextBoard);
  //
  return (
    <div className="BoardSideBarMain h-100per">
      <div className="BoardSideBarMain_contain h-100per">
        <div className="BoardSideBarMain_count">
          ALL BOARDS ({space_info.boards.length})
        </div>

        <div className="BoardSideBarMain_center">
          {space_info.boards.map((item, ix) => (
            <BoardSideBarBoard
              key={item.id}
              id_board={item.id}
              name_board={item.name}
              is_active={item.id === id_board}
            />
          ))}

          <div
            className="BoardSideBarMain_create board-sidebar-main-board"
            onClick={openModalAddBoard}
          >
            + Create New Board
          </div>
        </div>

        <div className="BoardSideBarMain_foot">
          <div className="BoardSideBarMain_mode">
            <LightMode />
          </div>

          {IS_MOBILE ? null : (
            <div>
              <BoardSidebarToggle hideSideBar={hideSideBar} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoardSideBarMain;
