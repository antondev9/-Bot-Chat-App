import React from "react";
import store from "../../redux/store";
import MessageOptions from "./MessageOptions";
import iconUser from "../chat/images/user.png";

export default function MessageItem() {
  const { ChatReducer } = store.getState();
  return (
    <div>
      {ChatReducer.messages.map((message) => {
        return (
          <div className="msg right-msg">
            <div className="msg-img">
              <img src={iconUser} alt="user"></img>
            </div>
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">You</div>
                <div className="msg-info-time mr-2">{message.date}</div>
                <div className="msg-info-time">
                  {<MessageOptions id={message.id} />}
                </div>
              </div>

              <div className="msg-text">{message.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
