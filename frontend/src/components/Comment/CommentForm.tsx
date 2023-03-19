import React, { useState } from "react";
import Button from "../UI/Button";

const CommentForm = (props: any) => {
  const [comment, setComment] = useState("");

  const commentChangeHandler = (e: any) => {
    setComment(e.target.value);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    props.onSave(comment);
    setComment("");
  };

  return (
    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-l">
      <form onSubmit={submitHandler} className="space-y-2">
        <div>
          <label
            htmlFor="content"
            className="block mb-2 font-bold text-gray-700"
          >
            Comment
          </label>
          <input
            type="text"
            id="content"
            required
            placeholder="Add Comment"
            value={comment}
            onChange={commentChangeHandler}
            className="w-full border-2 border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
