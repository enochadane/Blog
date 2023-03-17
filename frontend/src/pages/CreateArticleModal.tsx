import React from "react";
import CreateArticleForm from "../components/Article/CreateArticleForm";

const CreateArticleModal = (props: any) => {
  return (
    <div>
      <CreateArticleForm onSave={props.onSave} onClose={props.onClose} />
    </div>
  );
};

export default CreateArticleModal;
