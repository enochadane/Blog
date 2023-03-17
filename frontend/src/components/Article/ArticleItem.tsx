import React from "react";
import Card from "../UI/Card";

const ArticleItem = (props: any) => {
  return (
    <Card onClick={props.onClick}>
      <div>
        <h2 className="text-lg font-bold">{props.article.title}</h2>
        {props.article.body}
      </div>
      <div className="flex justify-end space-x-2">
        <div>{props.article.likes} likes</div>
        <div>{props.article.commentCount} comments</div>
      </div>
    </Card>
  );
};

export default ArticleItem;
