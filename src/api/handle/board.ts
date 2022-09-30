import { AxiosResponse } from "axios";
import { DEFAULT_ARR_SPACE } from "../../default/space";

import { Board } from "../../types";

// import { API_Board_R } from "../board";

//
export const handle_API_Board_R = async ({
  id = 0,
}): Promise<AxiosResponse<Board, any>> => {
  // const res = await API_Board_R();
  const res = { data: {} };
  const data = DEFAULT_ARR_SPACE[0].boards.find((item) => item.id === id);

  return { ...res, data: data };
};

let board_id = 100;
export const handle_API_Board_C = async ({ name = "" }) => {
  board_id += 1;
  return { data: { id: board_id, name: name, columns: [] } };
};

export const handle_API_Board_D = async ({ id = 0 }) => {
  return { data: id };
};
