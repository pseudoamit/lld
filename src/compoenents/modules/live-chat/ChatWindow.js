import React, { useEffect, useState } from "react";
import "./ChatWindow.css";
import ChatMessage from "./ChatMessage";
import { generateRandomName, liveChatData } from "../../../mockData";

const ChatWindow = () => {
  const [chats, setChats] = useState(liveChatData);

  //TODO: always take maximum 80 -100 messages and delete rest otherwise DOM will freeze
  const fetchData = () => {
    setChats((prev) => [
      ...prev,
      ...liveChatData.map((chat) => ({
        ...chat,
        name: generateRandomName(),
      })),
    ]);
  };

  useEffect(() => {
    const i = setInterval(fetchData, 500);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="chat-window-wrapper">
        {chats &&
          chats?.length > 0 &&
          chats?.map((chat, index) => <ChatMessage chats={chat} />)}
      </div>
    </>
  );
};

export default ChatWindow;
