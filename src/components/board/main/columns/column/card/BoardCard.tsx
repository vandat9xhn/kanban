import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import "./BoardCard.scss";

//
export interface BoardCardProps {
  title: string;
  description: string;
  draggableId: string;
  index: number;
}

//
function BoardCard({ title, description, draggableId, index }: BoardCardProps) {
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
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default BoardCard;
