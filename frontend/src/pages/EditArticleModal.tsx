import React from "react";
import CreateArticleForm from "../components/Article/CreateArticleForm";

const EditArticleModal = (props: any) => {
  return (
    <div>
      <CreateArticleForm
        onSave={props.onSave}
        onClose={props.onClose}
        title={props.title}
        body={props.body}
      />
    </div>
  );
};

export default EditArticleModal;
