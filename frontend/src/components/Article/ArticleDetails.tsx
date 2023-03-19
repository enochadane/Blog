import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
  fetchArticle,
  updateArticle,
} from "../../store/articles/article-actions";
import EditArticleModal from "../../pages/EditArticleModal";
import CommentList from "../Comment/CommentList";
import CreateComment from "../Comment/CreateComment";
import { createComment } from "../../store/articles/comment-actions";

const ArticleDetails = () => {
  const dispatch = useDispatch();
  const article = useSelector((state: any) => state.article.article);
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchArticle(id as unknown as number));
  }, [dispatch, id]);

  const handleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const editArticleHandler = (title: string, body: string) => {
    dispatch(updateArticle(article.id, title, body));
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const createCommentHandler = (content: string) => {
    dispatch(createComment(article.id, content));
  };

  return (
    <>
      {showModal && (
        <EditArticleModal
          onSave={editArticleHandler}
          onClose={handleShowModal}
          title={article.title}
          body={article.body}
        />
      )}
      <div className="max-w-xl mx-auto my-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={handleShowModal}
            className="cursor-pointer text-xl"
          />
        </div>
        <p className="text-lg mb-8">{article.body}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-500">
            {`${
              article.comments?.length > 0
                ? `${article.comments?.length} comments`
                : ""
            }`}
          </div>
          <div className="text-gray-500">{article.likes} likes</div>
        </div>
        <div>
          <CreateComment onSave={createCommentHandler} />
          <CommentList comments={article.comments} />
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
