import { createStore } from "redux";

const initialState: any = {
  username: "",
  email: "",
  id: "",
};

const profileReducer = (state = initialState, action: any) => {
  if (action.type === "FETCH_PROFILE") {
    return {
      username: action.payload.username || state.username,
      email: action.payload.email || state.email,
      id: action.payload.id || state.id,
    };
  }
};

const store = createStore(profileReducer);

export default store;
