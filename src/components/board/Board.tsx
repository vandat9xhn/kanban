import * as React from "react";

import BoardSideBar from "./side_bar/BoardSideBar";
import "./Board.scss";

//
export interface BoardProps {}

//
function Board({}: BoardProps) {
  //
  return (
    <div className="Board">
      <div className="Board_sidebar">
        <BoardSideBar />
      </div>

      <div className="Board_main"></div>
    </div>
  );
}

export default Board;
