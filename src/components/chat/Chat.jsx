import React from "react";
import "./styles.css";
import MessageArea from "./MessageArea";
import MessageContainer from "./MessageContainer";
import moment from "moment";

export default function Chat() {
  return (
    <section className="msger">
      <header className="msger-header">
        <div className="msger-header-title">
          <i className="fa sNamefa-comment-alt"></i> Chat!
        </div>
        <div className="msger-header-options">
          <span>{moment().format("DD-MM-YY")}</span>
        </div>
      </header>
      <MessageContainer />
      <MessageArea />
    </section>
  );
}
