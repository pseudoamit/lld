import React from "react";
import "./Comments.css";
import { commentsDetails } from "../../../mockData";
import CommentBox from "./CommentBox";

const Comments = () => {
  return (
    <div>
      <CommentBox comments={commentsDetails} />
    </div>
  );
};

export default Comments;
