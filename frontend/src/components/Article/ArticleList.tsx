import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../store";
import ArticleItem from "./ArticleItem";
import Button from "../UI/Button";

const ArticleList = () => {
  const articles = useSelector((state: any) => state.article.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-1/2">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Articles</h2>
        <Button>
          Create
        </Button>
      </div>
      {articles.map((article: any) => {
        return <ArticleItem article={article} key={article.id} />;
      })}
    </div>
  );
};

export default ArticleList;
