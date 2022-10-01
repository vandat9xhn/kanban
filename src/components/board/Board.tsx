import * as React from "react";

import { IS_MOBILE } from "../../constant";

import BoardModals from "./modals/BoardModals";
import BoardMb from "./mb/BoardMb";
import BoardPc from "./pc/BoardPc";

//
export interface BoardProps {}

//
function Board({}: BoardProps) {
  return (
    <React.Fragment>
      {IS_MOBILE ? <BoardMb /> : <BoardPc />}

      <BoardModals />
    </React.Fragment>
  );
}

export default Board;
