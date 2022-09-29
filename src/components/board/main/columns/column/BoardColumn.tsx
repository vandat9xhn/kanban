import * as React from "react";
import { Droppable } from "react-beautiful-dnd";

import { Card } from "../../../../../types";

import "./BoardColumn.scss";

import BoardCard from "./card/BoardCard";

//
export interface BoardColumnProps {
  name_col: string;
  cards: Card[];
  droppableId: string;
}

//
function BoardColumn({ name_col, cards, droppableId }: BoardColumnProps) {
  //
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div className="BoardColumn_name">
            {name_col} ({cards.length})
          </div>

          <div
            className={`BoardColumn_no_task ${
              cards.length === 0 ? "" : "display-none"
            }`}
          >
            No task
          </div>

          <div className="BoardColumn_cards">
            {cards.map((item, ix) => (
              <div key={item.id} className="BoardColumn_card">
                <BoardCard
                  title={item.title}
                  description={item.description}
                  draggableId={`${droppableId}_${item.id}`}
                  index={ix}
                />
              </div>
            ))}

            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default BoardColumn;
