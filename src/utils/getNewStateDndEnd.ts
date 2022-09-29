import { handleDndType, useBoardState } from "../types";

//
export const getNewStateDndEnd = ({
  id_source,
  ix_source_card,
  id_des,
  ix_des_card,
  state_obj,
}: Parameters<handleDndType>[0] & { state_obj: useBoardState }) => {
  const new_boards = { ...state_obj.boards };
  const { id_board } = state_obj;
  const columns = new_boards[id_board].columns;
  const source_col = columns.find((item) => item.id === id_source);
  const des_col = columns.find((item) => item.id === id_des);

  const card = source_col.cards.splice(ix_source_card, 1)[0];
  des_col.cards.splice(ix_des_card, 0, card);

  return {
    ...state_obj,
    boards: new_boards,
  };
};
