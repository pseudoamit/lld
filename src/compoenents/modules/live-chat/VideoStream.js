import React from "react";

const VideoStream = () => {
  return (
    <div>
      <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/dNFwgF8v_dc?si=fgiRI8xoRhBpXq6W"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoStream;
