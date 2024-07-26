import React from "react";
import "./LiveChat.css";
import VideoStream from "./VideoStream";
import ChatWindow from "./ChatWindow";

const LiveChat = () => {
  return (
    <>
      <div className="live-stream-chat-wrapper">
        <div className="live-stream-video-section">
          <VideoStream />
        </div>
        <div className="live-stream-chat-section">
          <ChatWindow />
        </div>
      </div>
    </>
  );
};

export default LiveChat;
