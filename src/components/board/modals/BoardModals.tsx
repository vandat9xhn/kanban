import * as React from "react";

import { contextBoard } from "../../../context/board/contextBoard";

import ModalAddBoard from "../../modals/add_board/ModalAddBoard";
import ModalAddColumn from "../../modals/add_column/ModalAddColumn";
import ModalAddTask from "../../modals/add_task/ModalAddTask";
import ModalViewTask from "../../modals/view_task/ModalViewTask";

//
export interface BoardModalsProps {}

//
function BoardModals({}: BoardModalsProps) {
  //
  const {
    modal,
    handleCreateBoard,
    handleCreateColumn,
    handleCreateCard,

    closeModalAddBoard,
    closeModalAddColumn,
    closeModalAddTask,
    closeModalViewTask,
  } = React.useContext(contextBoard);

  //

  if (modal.add_board) {
    return (
      <ModalAddBoard
        handleCreateBoard={handleCreateBoard}
        closeModal={closeModalAddBoard}
      />
    );
  }

  if (modal.add_column) {
    return (
      <ModalAddColumn
        handleCreateColumn={handleCreateColumn}
        closeModal={closeModalAddColumn}
      />
    );
  }

  if (modal.add_task) {
    return (
      <ModalAddTask
        handleCreateCard={handleCreateCard}
        closeModal={closeModalAddTask}
      />
    );
  }

  if (modal.view_task.ix_col_view_task >= 0) {
    return <ModalViewTask closeModal={closeModalViewTask} />;
  }

  //
  return null;
}

export default BoardModals;
