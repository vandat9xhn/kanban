import axiosClient from "./client/axiosClient";

//
export const API_SPACE_L = () =>
  axiosClient({
    url: "",
    method: "GET",
  });

export const API_SPACE_R = ({id = 0}) =>
  axiosClient({
    url: "",
    method: "GET",
  });
