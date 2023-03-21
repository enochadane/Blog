import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { faPencil, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditComment from "./EditComment";
import {
  deleteComment,
  updateComment,
} from "../../store/articles/comment-actions";
import DeleteModal from "../UI/DeleteModal";

const CommentItem = (props: any) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEditorHandler = () => {
    setIsEditing(true);
  };

  const updateCommentHandler = (content: string) => {
    dispatch(updateComment(props.comment.id, content));
    setIsEditing(false);
  };

  const showDeleteModalHandler = () => {
    setShowDeleteModal((prevShowDeleteModal) => !prevShowDeleteModal);
  };

  const deleteCommentHandler = () => {
    dispatch(deleteComment(props.comment.id));
    setShowDeleteModal((prevShowDeleteModal) => !prevShowDeleteModal);
  };

  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          onDelete={deleteCommentHandler}
          onCancel={showDeleteModalHandler}
          entity="Comment"
        />
      )}
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
            <div className="space-x-4">
              <button
                onClick={handleEditorHandler}
                className="text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faPencil} />
              </button>
              <button onClick={showDeleteModalHandler}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentItem;
