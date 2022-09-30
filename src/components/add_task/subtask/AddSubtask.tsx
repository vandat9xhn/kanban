import * as React from "react";

import {
  changeSubtaskDescriptionType,
  deleteSubtaskType,
} from "../../../types";

import "./AddSubtask.scss";

//
export interface AddSubtaskProps {
  ix: number;
  description: string;
  changeSubtaskDescription: changeSubtaskDescriptionType;
  deleteSubtask: deleteSubtaskType;
}

//
function AddSubtask({
  ix,
  description,
  changeSubtaskDescription,
  deleteSubtask,
}: AddSubtaskProps) {
  //
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    changeSubtaskDescription(ix, e.target.value);
  };

  const onDeleteSubtask = () => {
    deleteSubtask(ix);
  };

  //
  return (
    <div className="AddSubtask flex items-center">
      <div className="grow-1">
        <input
          className="AddSubtask_ip modal_ip"
          type="text"
          value={description}
          placeholder="Subtask Description"
          onChange={onChange}
        />
      </div>

      <div
        className="AddSubtask_del flex-center shrink-0"
        title="Delete"
        onClick={onDeleteSubtask}
      >
        x
      </div>
    </div>
  );
}

export default AddSubtask;
