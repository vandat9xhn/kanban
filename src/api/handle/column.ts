//
let column_id = 100;
export const handle_API_Column_C = async ({ name = "" }) => {
  column_id += 1;
  return { data: { id: column_id, name: name, cards: [] } };
};

export const handle_API_Column_D = async ({ id = 0 }) => {
  return { data: id };
};
