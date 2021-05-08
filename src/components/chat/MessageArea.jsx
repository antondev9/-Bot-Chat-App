import React from "react";
import store from "../../redux/store";
import { HandleInput } from "../../redux/chat/actions";
import { SendMessage } from "../../redux/chat/actions";

export default function MessageArea() {
  return (
    <form
      className="msger-inputarea"
      id="form-chat"
      onSubmit={(event) => {
        event.preventDefault();
        store.dispatch(SendMessage());
        document.getElementById("form-chat").reset();
      }}
      onInput={(event) => store.dispatch(HandleInput(event.target.value))}
    >
      <input
        type="text"
        required
        className="msger-input"
        placeholder="Type a message..."
      />
      <button type="submit" className="msger-send-btn">
        Send
      </button>
    </form>
  );
}
