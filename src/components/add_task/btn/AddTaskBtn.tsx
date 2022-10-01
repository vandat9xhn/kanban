import * as React from "react";

import { funcVoid } from "../../../types";
import BtnMaxWidth from "../../buttons/max_width/BtnMaxWidth";

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
    <BtnMaxWidth
      className={`AddTaskBtn ${className}`}
      type="button"
      onClick={handleClick}
    >
      {children}
    </BtnMaxWidth>
  );
}

export default AddTaskBtn;
