import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as outlinedHeart } from "@fortawesome/free-regular-svg-icons";
import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { updateLikes } from "../../store/articles/article-actions";

const ArticleItem = (props: any) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(props.article.liked);

  const likeHandler = () => {
    const like = liked ? -1 : 1;
    dispatch(updateLikes(props.article.id, like));
    setLiked((prevLiked: boolean) => !prevLiked);
  };
  return (
    <Card onClick={props.onClick}>
      <div>
        <h2 className="text-lg font-bold">{props.article.title}</h2>
        {props.article.body}
      </div>
      <div className="flex justify-end space-x-2">
        <div className="space-x-1">
          <span>{props.article.likes}</span>
          <button
            onClick={(event) => {
              event.stopPropagation();
              likeHandler();
            }}
          >
            <FontAwesomeIcon
              icon={liked ? faHeart : outlinedHeart}
              color="DarkRed"
            />
          </button>
        </div>
        <div>{props.article.commentCount} comments</div>
      </div>
    </Card>
  );
};

export default ArticleItem;
