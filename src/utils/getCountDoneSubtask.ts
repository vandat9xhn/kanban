import { Subtask } from "../types";

//
export const getCountDoneSubtask = (subtasks: Subtask[]) => {
  let i = 0;
  subtasks.forEach((item) => {
    i += item.done ? 1 : 0;
  });

  return i;
};
