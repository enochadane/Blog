import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  createArticle,
  fetchArticles,
} from "../../store/articles/article-actions";
import ArticleItem from "./ArticleItem";
import Button from "../UI/Button";
import CreateArticleModal from "../../pages/CreateArticleModal";

const ArticleList = () => {
  const articles = useSelector((state: any) => state.article.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const handleShowModal = (e: any) => {
    e.preventDefault();
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleCloseModal = (e: any) => {
    e.preventDefault();
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleCreateArticle = (title: string, body: string) => {
    // e.preventDefault();
    dispatch(createArticle(title, body));
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const articleDetailsHandler = (id: number) => {
    navigate(`${id}`)
  };

  return (
    <>
      {showModal && (
        <CreateArticleModal
          onSave={handleCreateArticle}
          onClose={handleCloseModal}
        />
      )}
      <div className="flex flex-col w-1/2">
        <div className="flex justify-between mt-5">
          <h2 className="text-2xl font-bold">Articles</h2>
          <Button type="button" onClick={handleShowModal}>
            Create
          </Button>
        </div>
        {articles.map((article: any) => {
          return (
            <ArticleItem
              onClick={() => articleDetailsHandler(article.id)}
              article={article}
              key={article.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default ArticleList;
