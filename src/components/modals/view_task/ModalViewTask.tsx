import * as React from "react";

import { Card, funcVoid } from "../../../types";

import ViewTask from "../../view_task/ViewTask";
import Modal from "../Modal";

//
export interface ModalViewTaskProps {
  closeModal: funcVoid;
}

//
function ModalViewTask({ closeModal }: ModalViewTaskProps) {
  //
  return (
    <Modal closeModal={closeModal}>
      <ViewTask />
    </Modal>
  );
}

export default ModalViewTask;
