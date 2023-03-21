import { createSlice } from "@reduxjs/toolkit";

interface Comment {
  id: number;
  body: string;
}

interface Article {
  id: number;
  title: string;
  body: string;
  likes: number;
  comments: Comment[];
}

const initialState: { items: Article[]; article: Article } = {
  items: [],
  article: {
    id: 0,
    title: "",
    body: "",
    likes: 0,
    comments: [],
  },
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    createArticle(state, action) {
      state.items.unshift(action.payload.article as never);
    },
    getArticles(state, action) {
      state.items = action.payload.items;
    },
    getArticle(state, action) {
      state.article = action.payload.article;
    },
    updateArticle(state, action) {
      const updatedArticle = action.payload.article;
      const prevIndex = state.items.findIndex(
        (article: any) => article.id === updatedArticle.id
      );
      state.items[prevIndex] = updatedArticle;
      state.article = updatedArticle;
    },
    deleteArticle(state, action) {
      state.items = state.items.filter(
        (article: any) => article.id !== action.payload.id
      );
    },
    createComment(state, action) {
      state.article.comments.push(action.payload.comment);
    },
    getComments(state, action) {
      state.article.comments = action.payload.comments;
    },
    updateComment(state, action) {
      const updatedComment = action.payload.comment;
      const prevIndex = state.article.comments.findIndex(
        (comment: Comment) => comment.id === updatedComment.id
      );
      state.article.comments[prevIndex] = updatedComment;
    },
    deleteComment(state, action) {
      state.article.comments = state.article.comments.filter(
        (comment: Comment) => comment.id !== action.payload.id
      );
    },
  },
});

export const articleActions = articleSlice.actions;

export default articleSlice;
