import * as React from "react";

import { funcVoid, handleCreateCardType } from "../../../types";

import "./ModalAddTask.scss";

import AddTask from "../../add_task/AddTask";
import Modal from "../Modal";

//
export interface ModalAddTaskProps {
  closeModal: funcVoid;
  handleCreateCard: handleCreateCardType;
}

//
function ModalAddTask({ handleCreateCard, closeModal }: ModalAddTaskProps) {
  //
  return (
    <Modal closeModal={closeModal}>
      <AddTask handleCreateCard={handleCreateCard} />
    </Modal>
  );
}

export default ModalAddTask;
