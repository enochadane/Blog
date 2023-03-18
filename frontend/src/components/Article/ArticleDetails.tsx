import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../store/articles/article-actions";

const ArticleDetails = () => {
  const dispatch = useDispatch();
  const article = useSelector((state: any) => state.article.article);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchArticle(id as unknown as number));
  }, [dispatch, id]);

  return (
    <div className="max-w-xl mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-lg mb-8">{article.body}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500">
          {`${
            article.comments.length > 0
              ? `${article.comments.length} comments`
              : ""
          }`}
        </div>
        <div className="text-gray-500">{article.likes} likes</div>
      </div>
    </div>
  );
};

export default ArticleDetails;
