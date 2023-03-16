// import { createStore } from "redux";

const initialState: any = {
  username: "",
  email: "",
  id: "",
};

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_PROFILE":
      return {
        username: action.payload.username || state.username,
        email: action.payload.email || state.email,
        id: action.payload.id || state.id,
      };
    default:
      return state;
  }
};

// const store = createStore(profileReducer);

// export default store;
