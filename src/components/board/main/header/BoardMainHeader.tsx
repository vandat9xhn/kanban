import * as React from "react";

import { contextBoard } from "../../../../context/board/contextBoard";

import "./BoardMainHeader.scss";

//
export interface BoardMainHeaderProps {}

//
function BoardMainHeader({}: BoardMainHeaderProps) {
  //
  const { id_board, boards } = React.useContext(contextBoard);

  // ---

  const showModalNewColumn = () => {};

  //
  return (
    <div className="BoardMainHeader">
      <div className="BoardMainHeader_row h-100per flex items-center space-between">
        <div className="BoardMainHeader_name">{boards[id_board].name}</div>

        <div className="BoardMainHeader_right">
          <div className="BoardMainHeader_new_col" onClick={showModalNewColumn}>
            + Add New Task
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default BoardMainHeader;
