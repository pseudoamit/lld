import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  const { subreddit, author, url } = data;
  return (
    <div className="card-wrapper">
      <img src={url} className="img-meme" />
      <div>{subreddit}</div>
      <div>{author}</div>
    </div>
  );
};

export default Card;
