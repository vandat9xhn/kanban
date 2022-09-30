import * as React from "react";

import { funcVoid, handleCreateCardType } from "../../../types";
import Portal from "../portal/Portal";

import "./ModalAddTask.scss";

import AddTask from "../../add_task/AddTask";

//
export interface ModalAddTaskProps {
  closeModal: funcVoid;
  handleCreateCard: handleCreateCardType;
}

//
function ModalAddTask({ handleCreateCard, closeModal }: ModalAddTaskProps) {
  //
  return (
    <Portal>
      <div className="ModalAddTask pos-fix-100per flex-center">
        <div className="ModalAddTask_bg" onClick={closeModal}></div>

        <div className="ModalAddTask_contain">
          <AddTask handleCreateCard={handleCreateCard} />
        </div>
      </div>
    </Portal>
  );
}

export default ModalAddTask;
