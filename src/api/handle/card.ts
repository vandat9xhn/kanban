//
let card_id = 100;
export const handle_API_Card_C = async ({ title = "", description = "" }) => {
  card_id += 1;
  return { data: { id: card_id, title: title, description: description } };
};

export const handle_API_Card_D = async ({ id = 0 }) => {
  return { data: id };
};

export const handle_API_Card_Change = async ({ id_from = 0, id_to }) => {
  return { data: { id_from: id_from, id_to: id_to } };
};
