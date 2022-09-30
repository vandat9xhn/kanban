import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import { openModalViewTaskType, Subtask } from "../../../../../../types";
import { getCountDoneSubtask } from "../../../../../../utils/getCountDoneSubtask";

import "./BoardCard.scss";

//
export interface BoardCardProps {
  title: string;
  description: string;
  subtasks: Subtask[];
  draggableId: string;
  index: number;
  openModalViewTask: openModalViewTaskType;
}

//
function BoardCard({
  title,
  description,
  subtasks,
  draggableId,
  index,
  openModalViewTask,
}: BoardCardProps) {
  //
  const count_done = getCountDoneSubtask(subtasks);

  //
  const onClick = () => {
    openModalViewTask(draggableId);
  };

  //
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
          }}
        >
          <div className="BoardCard" onClick={onClick}>
            <div className="BoardCard_contain">
              <div>{title}</div>

              <div className="BoardCard_description">{description}</div>

              {subtasks.length === 0 ? null : (
                <div className="BoardCard_done">
                  {count_done} of {subtasks.length} subtasks
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default BoardCard;
