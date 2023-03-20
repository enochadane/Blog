import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditComment from "./EditComment";
import { updateComment } from "../../store/articles/comment-actions";

const CommentItem = (props: any) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditorHandler = () => {
    setIsEditing(true);
  };

  const updateCommentHandler = (content: string) => {
    dispatch(updateComment(props.comment.id, content));
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      {isEditing && (
        <EditComment
          onEdit={updateCommentHandler}
          content={props.comment.body}
        />
      )}
      {!isEditing && (
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-600">{props.comment.body}</p>
          <button
            onClick={handleEditorHandler}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
