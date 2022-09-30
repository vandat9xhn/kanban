import * as React from "react";

import { Subtask, toggleSubtaskType } from "../../../types";

import "./ViewSubtask.scss";

//
export interface ViewSubtaskProps extends Subtask {
  toggleSubtask: toggleSubtaskType;
}

//
function ViewSubtask({
  id,
  done,
  description,
  toggleSubtask,
}: ViewSubtaskProps) {
  //
  const onChange = () => {
    toggleSubtask(id);
  };

  //
  return (
    <div className="ViewSubtask" onClick={onChange}>
      <div className="flex items-center pointer-events-none">
        <input
          className="ViewSubtask_ip"
          type="checkbox"
          checked={done}
          onChange={onChange}
        />

        <div
          className={`ViewSubtask_description ${
            done ? "ViewSubtask_description-done" : ""
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
}

export default ViewSubtask;
