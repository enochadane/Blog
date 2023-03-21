import React from "react";

const DeleteModal = (props: any) => {
  const cancelHandler = () => {
    props.onCancel();
  };
  const deleteHandler = () => {
    props.onDelete();
  };
  return (
    <>
      <div
        onClick={props.onCancel}
        className="fixed z-50 inset-0 bg-black opacity-50"
      />
      <div className="fixed z-50 inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-xl space-y-2">
          <div>
            <h2>{`Are you sure, do you want to delelte the ${props.entity}?`}</h2>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={deleteHandler}
              className="flex bg-red-600 text-white py-1 px-2 rounded-lg"
            >
              Delete
            </button>
            <button
              onClick={cancelHandler}
              className="flex bg-blue-600 text-white py-1 px-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
