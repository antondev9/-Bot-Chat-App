import React from "react";
import MessageItem from "./MessageItem";
import DefaultMessage from "./DefaultMessage";

export default function MessageContainer() {
  return (
    <main className="msger-chat">
      <DefaultMessage />
      <MessageItem />
    </main>
  );
}
