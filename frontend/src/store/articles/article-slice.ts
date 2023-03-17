import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
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
    getArticle(state, action) {},
    updateArticle(state, action) {},
    deleteArticle(state) {},
  },
});

export const articleActions = articleSlice.actions;

export default articleSlice;
