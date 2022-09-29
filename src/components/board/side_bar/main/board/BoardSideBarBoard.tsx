import * as React from "react";
import { Link } from "react-router-dom";

import "./BoardSideBarBoard.scss";

//
export interface BoardSideBarBoardProps {
  id_board: number;
  name_board: string;
  is_active: boolean;
}

//
function BoardSideBarBoard({
  id_board,
  name_board,
  is_active,
}: BoardSideBarBoardProps) {
  //
  return (
    <Link
      className={`BoardSideBarBoard board-sidebar-main-board  display-block ${
        is_active ? "BoardSideBarBoard-active" : ""
      }`}
      to={`?id_board=${id_board}`}
      replace
    >
      <div>{name_board}</div>
    </Link>
  );
}

export default BoardSideBarBoard;
