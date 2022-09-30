import * as React from "react";

import { funcVoid } from "../../types";
import Portal from "./portal/Portal";

import "./Modal.scss";

//
export interface ModalProps {
  children: React.ReactElement;
  closeModal: funcVoid;
}

//
function Modal({ children, closeModal }: ModalProps) {
  //
  return (
    <Portal>
      <div className="Modal pos-fix-100per flex-center">
        <div className="Modal_bg" onClick={closeModal}></div>

        <div className="Modal_contain">{children}</div>
      </div>
    </Portal>
  );
}

export default Modal;
