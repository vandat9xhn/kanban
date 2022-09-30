import { handleCreateCardType, useBoardState } from "../types";

//
export const getNewStateAddCard = ({
  id,
  title,
  status_task,
  description,
  subtasks,
  state_obj,
}: Parameters<handleCreateCardType>[0] & {
  id: number;
  state_obj: useBoardState;
}): useBoardState => {
  const new_boards = { ...state_obj.boards };
  const board = new_boards[state_obj.id_board];
  const column = board.columns.find((item) => item.name === status_task);
  column.cards.push({
    id: id,
    title: title,
    description: description,
    subtasks: subtasks,
  });

  return {
    ...state_obj,
    boards: new_boards,
  };
};
