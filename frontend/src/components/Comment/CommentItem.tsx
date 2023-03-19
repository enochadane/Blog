import React from "react";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentItem = (props: any) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-600">{props.comment.body}</p>
        <button className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faPencil} />
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
