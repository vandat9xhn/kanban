import * as React from "react";

import { getCountDoneSubtask } from "../../utils/getCountDoneSubtask";
import { contextBoard } from "../../context/board/contextBoard";

import "./ViewTask.scss";

import ViewSubtask from "./subtask/ViewSubtask";

//
export interface ViewTaskProps {}

//
function ViewTask({}: ViewTaskProps) {
  //
  const { modal, boards, id_board, handleDnd } = React.useContext(contextBoard);
  const { ix_col_view_task, ix_card_view_task } = modal.view_task;

  const arr_column_name = boards[id_board].columns.map((item) => item.name);
  const card =
    boards[id_board].columns[ix_col_view_task].cards[ix_card_view_task];

  //
  const [state_obj, setStateObj] = React.useState({
    status_task: arr_column_name[ix_col_view_task],
    subtasks: card.subtasks,
  });

  const { status_task, subtasks } = state_obj;
  const count_done = getCountDoneSubtask(subtasks);

  //
  const refMounted = React.useRef(false);

  //
  React.useEffect(() => {
    refMounted.current = true;
    return () => {
      refMounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    return () => {
      if (!refMounted.current) {
        if (arr_column_name[ix_col_view_task] === status_task) {
          return;
        }

        const ix_des_col = arr_column_name.findIndex(
          (item) => item === status_task
        );

        handleDnd({
          id_source: boards[id_board].columns[ix_col_view_task].id,
          ix_source_card: ix_card_view_task,
          id_des: boards[id_board].columns[ix_des_col].id,
          ix_des_card: boards[id_board].columns[ix_des_col].cards.length,
        });
      }
    };
  }, [status_task]);

  // ----

  const handleChangeStatus: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setStateObj((state_obj) => ({
      ...state_obj,
      status_task: e.target.value,
    }));
  };

  const toggleSubtask = (id: number) => {
    setStateObj((state_obj) => {
      const new_subtasks = [...state_obj.subtasks];
      const subtask = new_subtasks.find((item) => item.id === id);
      subtask.done = !subtask.done;

      return {
        ...state_obj,
        subtasks: new_subtasks,
      };
    });
  };

  //
  return (
    <div className="ViewTask modal_contain">
      <h2 className="ViewTask_heading modal_heading">{card.title}</h2>

      <div className="ViewTask_description modal_part">{card.description}</div>

      <div className="ViewTask_subtasks modal_part">
        <div className="ViewTask_label modal_label">
          Subtasks ({count_done} of {subtasks.length})
        </div>

        <div>
          {subtasks.map((item, ix) => (
            <div className="ViewTask_subtask" key={item.id}>
              <ViewSubtask {...item} toggleSubtask={toggleSubtask} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="ViewTask_label modal_label">Status</div>

        <select
          className="ViewTask_select modal_ip"
          name="status_task"
          value={status_task}
          onChange={handleChangeStatus}
        >
          {arr_column_name.map((item, ix) => (
            <option className="modal_option" key={ix}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ViewTask;
