import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }: { comments: any }) => {
  return (
    <div className="space-y-4">
      {comments?.map((comment: any) => {
        return <CommentItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentList;
