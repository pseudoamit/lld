import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ chats }) => {
  const { id, name, imageURL, message } = chats;

  return (
    <>
      <div className="chats-wrapper">
        <div className="image-wrapper">
          <img alt={name} src={imageURL} />
        </div>
        <div className="content-wrapper">
          <span>{name}</span>
          <span>{message}</span>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
