import moment from "moment";

const INITIAL_STATE = {
  messages: [],
  inputMessage: {},
};

function generateId() {
  var d = new Date().getTime();
  var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

export const ChatReducer = (previousState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      let newState = { ...previousState, inputMessage: action.payload };
      return newState;
    case "SEND":
      let Chat = [...previousState.messages];
      let newChat = {
        id: generateId(),
        content: previousState.inputMessage,
        date: moment().format("LT"),
        showOptions: false,
      };
      Chat.push(newChat);
      return { ...previousState, messages: Chat };
    case "DELETE":
      let MessageList = [...previousState.messages];
      let results = MessageList.filter(
        (message) => message.id !== action.payload
      );
      return { ...previousState, messages: results };
    default:
      return previousState;
  }
};
