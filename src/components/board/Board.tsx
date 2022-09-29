import * as React from "react";

import BoardSideBar from "./side_bar/BoardSideBar";
import BoardMain from "./main/BoardMain";

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

      <div className="Board_main">
        <BoardMain />
      </div>
    </div>
  );
}

export default Board;
