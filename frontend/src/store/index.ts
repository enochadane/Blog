import { configureStore } from "@reduxjs/toolkit";

import articleSlice from "./articles/article-slice";
import { profileReducer } from "./redux";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    article: articleSlice.reducer,
  },
});

export default store;
