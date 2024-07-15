import React from "react";
import "./CommentBox.css";

const CommentBox = ({ comments }) => {
  return (
    <>
      {comments?.map((comment, index) => (
        <div key={index} className="comment-root-wrapper">
          <div>
            <img
              className="img-avatar"
              src="https://styles.redditmedia.com/t5_3h47q/styles/communityIcon_zqvf8dnae26b1.jpg?format=pjpg&s=0b962cdc797fd23a9e335c94ac78398d32108165"
              alt="something"
            />
          </div>
          <div className="comment-content-wrapper">
            <div>{comment?.username}</div>
            <div>{comment?.comment}</div>
            <div className="replies-wrapper">
              {comment?.replies && comment?.replies?.length > 0 && (
                <CommentBox comments={comment?.replies}></CommentBox>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentBox;
