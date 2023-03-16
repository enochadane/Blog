import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    createArticle(state, payload) {},
    getArticles(state, action) {
      state.items = action.payload.items;
    },
    getArticle(state, payload) {},
    updateArticle(state, payload) {},
    deleteArticle(state) {},
  },
});

export const articleActions = articleSlice.actions;

export default articleSlice;
