import * as React from "react";

import { funcVoid } from "../../../types";

import "./AddTaskBtn.scss";

//
export interface AddTaskBtnProps {
  className?: string;
  children?: React.ComponentProps<"button">["children"];
  handleClick: funcVoid;
}

//
function AddTaskBtn({
  className = "",
  children,
  handleClick,
}: AddTaskBtnProps) {
  //
  return (
    <button
      className={`AddTaskBtn w-100per hv-opacity-09 active-scale-096 ${className}`}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default AddTaskBtn;
