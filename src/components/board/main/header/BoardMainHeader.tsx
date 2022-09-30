import * as React from "react";

import { contextBoard } from "../../../../context/board/contextBoard";
import { useBool } from "../../../../hooks/useBool";
import { handleCreateCardType } from "../../../../types";

import ModalAddTask from "../../../modals/add_task/ModalAddTask";

import "./BoardMainHeader.scss";

//
export interface BoardMainHeaderProps {}

//
function BoardMainHeader({}: BoardMainHeaderProps) {
  //
  const { id_board, boards, handleCreateCard } = React.useContext(contextBoard);

  //
  const { is_true, setBoolFalse, setBoolTrue } = useBool(false);

  // -----

  const onCreateCard: handleCreateCardType = (data_card) => {
    setBoolFalse();
    handleCreateCard(data_card);
  };

  //
  return (
    <div className="BoardMainHeader">
      <div className="BoardMainHeader_row h-100per flex items-center space-between">
        <div className="BoardMainHeader_name">{boards[id_board].name}</div>

        <div className="BoardMainHeader_right">
          <div className="BoardMainHeader_new_col" onClick={setBoolTrue}>
            + Add New Task
          </div>

          <div></div>
        </div>
      </div>

      {is_true ? (
        <ModalAddTask
          handleCreateCard={onCreateCard}
          closeModal={setBoolFalse}
        />
      ) : null}
    </div>
  );
}

export default BoardMainHeader;
