import React, { useState } from "react";
import ReactDOM from "react-dom";

import Button from "../UI/Button";

const Backdrop = (props: any) => {
  return (
    <div
      className="fixed z-50 inset-0 bg-black opacity-50"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props: any) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleDetailsChange = (e: any) => {
    setBody(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    props.onSave(title, body)
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl">
        <h3 className="text-xl font-bold text-center mb-6">Create Article</h3>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-bold text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              required
              placeholder="Enter Title"
              onChange={handleTitleChange}
              className="w-full border-2 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div>
            <label
              htmlFor="details"
              className="block mb-2 font-bold text-gray-700"
            >
              Details
            </label>
            <textarea
              typeof="text"
              id="details"
              required
              placeholder="Enter Details"
              onChange={handleDetailsChange}
              className="w-full border-2 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Button type="button" onClick={props.onClose}>
              Close
            </Button>
            <Button type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CreateArticleForm = (props: any) => {
  const backdropRoot = document.getElementById("backdrop-root");
  const overlayRoot = document.getElementById("overlay-root");
  if (!backdropRoot || !overlayRoot) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        backdropRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onSave={props.onSave} onClose={props.onClose} />,
        overlayRoot
      )}
    </>
  );
};

export default CreateArticleForm;
