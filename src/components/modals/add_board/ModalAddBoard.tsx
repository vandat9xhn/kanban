import * as React from "react";

import { handleCreateBoardType } from "../../../types";

import AddBoard from "../../add_board/AddBoard";
import Modal from "../Modal";

//
export interface ModalAddBoardProps {
  handleCreateBoard: handleCreateBoardType;
  closeModal: VoidFunction;
}

//
function ModalAddBoard({ handleCreateBoard, closeModal }: ModalAddBoardProps) {
  //
  return (
    <Modal closeModal={closeModal}>
      <AddBoard handleCreateBoard={handleCreateBoard} />
    </Modal>
  );
}

export default ModalAddBoard;
