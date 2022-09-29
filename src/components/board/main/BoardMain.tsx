import * as React from "react";

import "./BoardMain.scss";

import BoardColumns from "./columns/BoardColumns";
import BoardMainHeader from "./header/BoardMainHeader";

//
export interface BoardMainProps {}

//
function BoardMain({}: BoardMainProps) {
  //
  return (
    <div className="BoardMain">
      <div className="BoardMain_row">
        <div className="BoardMain_header">
          <BoardMainHeader />
        </div>

        <div className="BoardMain_columns">
          <BoardColumns />
        </div>
      </div>
    </div>
  );
}

export default BoardMain;
