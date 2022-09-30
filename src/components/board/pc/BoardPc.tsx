import * as React from "react";

import BoardSideBar from "../side_bar/BoardSideBar";
import BoardMain from "../main/BoardMain";

import "./BoardPc.scss";

//
export interface BoardPcProps {}

//
function BoardPc({}: BoardPcProps) {
  //
  return (
    <div className="BoardPc">
      <div className="BoardPc_sidebar">
        <BoardSideBar />
      </div>

      <div className="BoardPc_main">
        <BoardMain />
      </div>
    </div>
  );
}

export default BoardPc;
