import * as React from "react";

import { handleCreateColumnType } from "../../types";

import BtnMaxWidth from "../buttons/max_width/BtnMaxWidth";

//
export interface AddColumnProps {
  handleCreateColumn: handleCreateColumnType;
}

//
//
function AddColumn({ handleCreateColumn }: AddColumnProps) {


  //
  const [state_obj, setStateObj] = React.useState({
    name: "",
  });

  const { name } = state_obj;

  // ----

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setStateObj((state_obj) => {
      const new_name = e.target.value;

      return {
        ...state_obj,
        name: new_name,
      };
    });
  };

  const onCreateBoard = () => {
    if (!state_obj.name.trim()) {
      return;
    }

    handleCreateColumn(state_obj);
  };

  //
  return (
    <div className="modal_contain">
      <h2 className="modal_heading">Add New Column</h2>

      <div className="modal_part">
        <div className="modal_label">Name</div>

        <div>
          <input
            className="modal_ip"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <BtnMaxWidth onClick={onCreateBoard}>Create Column</BtnMaxWidth>
      </div>
    </div>
  );
}

export default AddColumn;
