import React from "react";
import moment from "moment";
import iconBot from "../chat/images/bot.png";

export default function DefaultMessage() {
  return (
    <div className="msg left-msg">
      <div className="msg-img">
        <img src={iconBot} alt="bot" />
      </div>

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">BOT</div>
          <div className="msg-info-time">{moment().format("LT")}</div>
        </div>

        <div className="msg-text">
          Hello, welcome to the chat, what are you waiting to send a message !.
        </div>
      </div>
    </div>
  );
}
