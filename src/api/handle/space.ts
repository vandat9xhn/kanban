import { AxiosResponse } from "axios";

import { Space } from "../../types";

import { API_SPACE_L, API_SPACE_R } from "../space";

//
export const handle_API_SPACE_L = async (): Promise<
  AxiosResponse<Space[], any>
> => {
  const res = await API_SPACE_L();

  return res;
};

export const handle_API_SPACEInfo_R = async ({
  id = 0,
}): Promise<AxiosResponse<Space, any>> => {
  const res = await API_SPACE_R({ id });

  return { ...res, data: res.data[0] };
};

let space_id = 100;
export const handle_API_SPACE_C = async ({ name = "" }) => {
  space_id += 1;
  // const res = await API_SPACE_R();

  return { data: { id: space_id, name: name, boards: [] } };
};

export const handle_API_SPACE_D = async ({ id = 0 }) => {
  // const res = await API_SPACE_R();

  return { data: id };
};
