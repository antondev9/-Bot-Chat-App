/* Reducer Actions */

export const HandleInput = (value) => ({
  type: "SET_INPUT_VALUE",
  payload: value,
});

export const SendMessage = () => ({
  type: "SEND",
});

export const DeleteMessage = (id) => ({
  type: "DELETE",
  payload: id,
});
