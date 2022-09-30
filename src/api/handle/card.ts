//
let id_card = 100;
let id_subtask = 100;
export const handle_API_Card_C = async ({
  title = "",
  description = "",
  status_task = "",
  subtasks = [],
}) => {
  id_card += 1;
  return {
    data: {
      id: id_card,
      title: title,
      description: description,
      subtasks: subtasks.map((item) => {
        id_subtask += 1;

        return {
          id: id_subtask,
          ...item,
          done: false,
        };
      }),
    },
  };
};

export const handle_API_Card_D = async ({ id = 0 }) => {
  return { data: id };
};

export const handle_API_Card_Change = async ({ id_from = 0, id_to }) => {
  return { data: { id_from: id_from, id_to: id_to } };
};
