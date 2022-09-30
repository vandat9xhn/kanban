import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Subtask } from "../../../../../../types";

import "./BoardCard.scss";

//
export interface BoardCardProps {
  title: string;
  description: string;
  subtasks: Subtask[];
  draggableId: string;
  index: number;
}

//
function BoardCard({
  title,
  description,
  subtasks,
  draggableId,
  index,
}: BoardCardProps) {
  //
  const count_done = (() => {
    let i = 0;
    subtasks.forEach((item) => {
      i += item.done ? 1 : 0;
    });

    return i;
  })();

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
          <div className="BoardCard">
            <div className="BoardCard_contain">
              <div>{title}</div>

              <div className="BoardCard_description">{description}</div>

              {subtasks.length === 0 ? null : (
                <div className="BoardCard_done">
                  {count_done} of {subtasks.length - count_done} subtasks
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
