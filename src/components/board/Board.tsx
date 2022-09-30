import * as React from "react";

import { IS_MOBILE } from "../../constant";

import BoardMb from "./mb/BoardMb";
import BoardPc from "./pc/BoardPc";

//
export interface BoardProps {}

//
function Board({}: BoardProps) {
  if (!IS_MOBILE) {
    return <BoardPc />;
  }

  return <BoardMb />;
}

export default Board;
