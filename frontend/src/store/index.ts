import { createSlice, configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./redux";

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

const articleActions = articleSlice.actions;

export const fetchArticles = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/articles", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    };

    try {
      const data = await fetchData();
      dispatch(
        articleActions.getArticles({
          items: data.data,
        })
      );
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

const store = configureStore({
  reducer: {
    profile: profileReducer,
    article: articleSlice.reducer,
  },
});

export default store;
