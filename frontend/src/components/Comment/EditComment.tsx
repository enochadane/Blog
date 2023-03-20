import React from "react";
import CommentForm from "./CommentForm";

const EditComment = (props: any) => {
  return (
    <div>
      <CommentForm onEdit={props.onEdit} content={props.content} />
    </div>
  );
};

export default EditComment;
