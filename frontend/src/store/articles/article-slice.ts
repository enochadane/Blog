import { createSlice } from "@reduxjs/toolkit";

interface Article {
  id: number;
  title: string;
  body: string;
  likes: number;
  comments: [];
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
    deleteArticle(state) {},
  },
});

export const articleActions = articleSlice.actions;

export default articleSlice;
