import * as React from "react";

import {
  AddTaskState,
  changeSubtaskDescriptionType,
  deleteSubtaskType,
  handleCreateCardType,
} from "../../types";

import "./AddTask.scss";

import { contextBoard } from "../../context/board/contextBoard";
import AddTaskBtn from "./btn/AddTaskBtn";
import AddSubtask from "./subtask/AddSubtask";

//
export interface AddTaskProps {
  handleCreateCard: handleCreateCardType;
}

//
function AddTask({ handleCreateCard }: AddTaskProps) {
  //
  const { boards, id_board } = React.useContext(contextBoard);
  const arr_column_name = boards[id_board].columns.map((item) => item.name);

  //
  const [state_obj, setStateObj] = React.useState<AddTaskState>({
    title: "",
    description: "",
    status_task: arr_column_name[0],
    subtasks: [],
  });

  const { title, description, status_task, subtasks } = state_obj;

  // ---

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    handleChangeState(e.target.name, e.target.value);
  };

  const handleChangeState = (name = "", value = "") => {
    setStateObj((state_obj) => {
      return {
        ...state_obj,
        [name]: value,
      };
    });
  };

  // SUBTASK

  const handleAddSubtask = () => {
    setStateObj((state_obj) => {
      const new_subtasks = [...state_obj.subtasks];
      new_subtasks.push({
        id: new_subtasks.length === 0 ? 1 : new_subtasks.slice(-1)[0].id + 1,
        description: "",
        done: false,
      });

      return {
        ...state_obj,
        subtasks: new_subtasks,
      };
    });
  };

  const changeSubtaskDescription: changeSubtaskDescriptionType = (
    ix,
    description
  ) => {
    setStateObj((state_obj) => {
      const new_subtasks = [...state_obj.subtasks];
      new_subtasks[ix].description = description;

      return {
        ...state_obj,
        subtasks: new_subtasks,
      };
    });
  };

  const deleteSubtask: deleteSubtaskType = (ix) => {
    setStateObj((state_obj) => {
      const new_subtasks = [...state_obj.subtasks];
      new_subtasks.splice(ix, 1);

      return {
        ...state_obj,
        subtasks: new_subtasks,
      };
    });
  };

  //

  const createTask = () => {
    if (!title || !description) {
      return;
    }
    handleCreateCard(state_obj);
  };

  //
  return (
    <div className="AddTask modal_contain">
      <h2 className="AddTask_heading modal_heading">Add New Task</h2>

      <div className="AddTask_part modal_part">
        <div className="AddTask_label modal_label">Title</div>

        <div>
          <input
            className="modal_ip"
            name="title"
            type="text"
            value={title}
            placeholder="Card Title"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="AddTask_part modal_part">
        <div className="AddTask_label modal_label">Description</div>

        <div>
          <textarea
            className="AddTask_description modal_ip"
            name="description"
            rows={6}
            value={description}
            placeholder="Card Description"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="AddTask_part modal_part">
        <div className="AddTask_label modal_label">Subtasks</div>

        <div>
          <div>
            {subtasks.map((item, ix) => (
              <AddSubtask
                key={item.id}
                ix={ix}
                description={item.description}
                changeSubtaskDescription={changeSubtaskDescription}
                deleteSubtask={deleteSubtask}
              />
            ))}
          </div>

          <div>
            <AddTaskBtn
              className="AddTask_add_sub"
              handleClick={handleAddSubtask}
            >
              + Add New Subtask
            </AddTaskBtn>
          </div>
        </div>
      </div>

      <div className="AddTask_part modal_part">
        <div className="AddTask_label modal_label">Status</div>

        <div>
          <select
            className="AddTask_select modal_ip"
            name="status_task"
            value={status_task}
            onChange={handleChange}
          >
            {arr_column_name.map((item, ix) => (
              <option className="modal_option" key={ix}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div
        className={`${
          title && description ? "" : "pointer-events-none opacity-05"
        }`}
      >
        <AddTaskBtn className="AddTask_create" handleClick={createTask}>
          Create Subtask
        </AddTaskBtn>
      </div>
    </div>
  );
}

export default AddTask;
