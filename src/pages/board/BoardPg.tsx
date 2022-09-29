import * as React from "react";

import ContextBoardComponent from "../../context/board/ContextBoardComponent";
import Board from "../../components/board/Board";

//
export interface BoardPgProps {}

//
function BoardPg({}: BoardPgProps) {
  //
  return (
    <ContextBoardComponent>
      <Board />
    </ContextBoardComponent>
  );
}

export default BoardPg;
