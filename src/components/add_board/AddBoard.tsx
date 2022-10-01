import * as React from "react";

import { handleCreateBoardType } from "../../types";

import BtnMaxWidth from "../buttons/max_width/BtnMaxWidth";

//
export interface AddBoardProps {
  handleCreateBoard: handleCreateBoardType;
}

//
function AddBoard({ handleCreateBoard }: AddBoardProps) {
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

    handleCreateBoard(state_obj);
  };

  //
  return (
    <div className="AddBoard modal_contain">
      <h2 className="modal_heading">Add New Board</h2>

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
        <BtnMaxWidth onClick={onCreateBoard}>Create Board</BtnMaxWidth>
      </div>
    </div>
  );
}

export default AddBoard;
