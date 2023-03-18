import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Card from "../UI/Card";

const ArticleItem = (props: any) => {
  return (
    <Card onClick={props.onClick}>
      <div>
        <h2 className="text-lg font-bold">{props.article.title}</h2>
        {props.article.body}
      </div>
      <div className="flex justify-end space-x-2">
        <div className="flex space-x-1">
          <div>{props.article.likes}</div>
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div>{props.article.commentCount} comments</div>
      </div>
    </Card>
  );
};

export default ArticleItem;
