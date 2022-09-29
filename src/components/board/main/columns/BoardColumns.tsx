import * as React from "react";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";

import { contextBoard } from "../../../../context/board/contextBoard";

import "./BoardColumns.scss";

import BoardColumn from "./column/BoardColumn";

//
export interface BoardColumnsProps {}

//
function BoardColumns({}: BoardColumnsProps) {
  //
  const { boards, id_board, handleDnd, createColumn } =
    React.useContext(contextBoard);

  //
  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    handleDnd({
      id_source: parseInt(source.droppableId),
      ix_source_card: source.index,
      id_des: parseInt(destination.droppableId),
      ix_des_card: destination.index,
    });
  };

  const showModalCreateColumn = () => {};

  //
  return (
    <div className="BoardColumns">
      <div className="BoardColumns_row flex">
        <DragDropContext onDragEnd={onDragEnd}>
          {boards[id_board].columns.map((item, ix) => (
            <div key={item.id} className="BoardColumns_item">
              <BoardColumn
                name_col={item.name}
                cards={item.cards}
                droppableId={`${item.id}`}
              />
            </div>
          ))}
        </DragDropContext>

        <div
          className="BoardColumns_item BoardColumns_create"
          onClick={showModalCreateColumn}
        >
          <div className="BoardColumns_create_contain">

          + New Column
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardColumns;
