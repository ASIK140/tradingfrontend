import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "./Reducer/UserReducers";
import AdminReducer from "./Reducer/AdminReducer";
const store = configureStore({
  reducer: {
    user: UserReducers,
    admin: AdminReducer,
  },
});

export default store;
