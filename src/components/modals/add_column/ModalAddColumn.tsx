import * as React from "react";

import { handleCreateColumnType } from "../../../types";

import AddColumn from "../../add_column/AddColumn";
import Modal from "../Modal";

//
export interface ModalAddColumnProps {
  handleCreateColumn: handleCreateColumnType;
  closeModal: VoidFunction;
}

//
function ModalAddColumn({
  handleCreateColumn,
  closeModal,
}: ModalAddColumnProps) {
  //
  return (
    <Modal closeModal={closeModal}>
      <AddColumn handleCreateColumn={handleCreateColumn} />
    </Modal>
  );
}

export default ModalAddColumn;
