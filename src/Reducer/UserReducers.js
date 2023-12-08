import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
const initialState = {
  user: {},
  allusers: [],
  loading: false,
  AuthU: false,
  AuthA: false,
};
const User = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getAllusers: (state, action) => {
      state.allusers.push(action.payload);
    },
    setloading: (state, action) => {
      state.loading = action.payload;
    },
    setAuthU: (state, action) => {
      state.AuthU = action.payload;
    },
    setAuthA: (state, action) => {
      state.AuthA = action.payload;
    },
  },
});

export const { getAllusers, getUser, setloading, setAuthU, setAuthA } =
  User.actions;
export default User.reducer;

export const SignIn = (logdata, nav) => {
  return async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post("/api/v1/sign-in", logdata, config);
      if (data.user.role === "admin") {
        dispatch(setAuthA(true));
      }
      dispatch(setAuthU(true));
      dispatch(setloading(false));
      dispatch(getUser(data));
      nav("/me");
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};

export const SignUp = (Regdata, nav) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post("/api/v1/sign-up", Regdata, config);
      dispatch(setAuthU(true));
      dispatch(getUser(data));
      dispatch(setloading(false));
      nav("/me");
      toast.success("Sign Up Successful");
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};

export const SignOut = (nav) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.get("/api/v1/sign-out");
      await nav("/");
      dispatch(setAuthA(false));
      dispatch(setAuthU(false));
      dispatch(setloading(false));
    } catch (error) {
      dispatch(setloading(false));
      console.log(error);
    }
  };
};

export const userDetails = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/v1/user");
      if (data.user.role === "admin") {
        dispatch(setAuthA(true));
      }
      dispatch(setAuthU(true));
      dispatch(getUser(data));
    } catch (error) {}
  };
};

export const updateProfile = (userData, id) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.put(
        `/api/v1/update-profile/${id}`,
        userData
      );
      dispatch(setAuthU(true));
      dispatch(getUser(data));
      dispatch(setloading(false));
    } catch (error) {
      dispatch(setloading(false));
      console.log(error);
    }
  };
};

//change password
export const changePass = (userData, id) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.put(
        `/api/v1/change-password/${id}`,
        userData
      );
      dispatch(setAuthU(true));
      dispatch(getUser(data));
      dispatch(setloading(false));
    } catch (error) {
      dispatch(setloading(false));
      console.log(error);
    }
  };
};

//Feedback
export const feedBack = (feddata, nav) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.post("/api/v1/feedback", feddata);
      dispatch(getUser(data));
      dispatch(setloading(false));
      nav("/thankyou");
    } catch (error) {
      dispatch(setloading(false));
      console.log(error);
    }
  };
};
