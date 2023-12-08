import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
const initialState = {
  data: {},
  allusers: [],
  loading: false,
  AuthAd: false,
};

const Admin = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    getAllusers: (state, action) => {
      state.allusers.push(action.payload);
    },
    setloading: (state, action) => {
      state.loading = action.payload;
    },
    setAuth: (state, action) => {
      state.AuthAd = action.payload;
    },
  },
});

export const { getAllusers, getData, setloading, setAuth } = Admin.actions;
export default Admin.reducer;

//Create
export const createSen = (Sen_data) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.post("/api/v1/sentiments", Sen_data);
      dispatch(setloading(false));
      toast.success("Sentiments Create Successful");
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};
export const createDex = (Sen_data) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.post("/api/v1/dex", Sen_data);
      dispatch(setloading(false));
      toast.success("Dex Create Successful");
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};

export const createNews = (Sen_data) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.post("/api/v1/news", Sen_data);
      dispatch(setloading(false));
      toast.success("News Create Successful");
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};
export const createRes = (Sen_data) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.post("/api/v1/resource", Sen_data);
      dispatch(setloading(false));
      toast.success("Resource Create Successful");
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};

//Get All
export const getAllSen = () => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.get("/api/v1/sentiments");
      dispatch(setloading(false));
      dispatch(getData(data));
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};
export const getAllDex = () => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.get("/api/v1/dex");
      dispatch(setloading(false));
      dispatch(getData(data));
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};
export const getAllNews = () => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.get("/api/v1/news");
      dispatch(setloading(false));
      dispatch(getData(data));
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};
export const getAllRes = () => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.get("/api/v1/resource");
      dispatch(setloading(false));
      dispatch(getData(data));
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};
export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.get("/api/v1/allusers");
      dispatch(getData(data));
      dispatch(setloading(false));
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};

// Update User payment and role

export const updateUser = (userData, id) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.put(`/api/v1/update-user/${id}`, userData);
      dispatch(setloading(false));
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};

//Delete
export const deleteSen = (id) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.delete(`/api/v1/del-sen/${id}`);
      dispatch(setloading(false));
      toast.success("Sentiments Delete Successful");
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};

export const deleteDex = (id) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.delete(`/api/v1/del-dex/${id}`);
      dispatch(setloading(false));
      toast.success("Dex Delete Successful");
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};
export const deleteNews = (id) => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.delete(`/api/v1/del-news/${id}`);
      dispatch(setloading(false));
      toast.success("News Delete Successful");
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};

// Get ALL Feedback

export const AllFeedback = () => {
  return async (dispatch) => {
    dispatch(setloading(true));
    try {
      const { data } = await axios.get("/api/v1/allfeed");
      dispatch(getData(data));
      dispatch(setloading(false));
    } catch (error) {
      dispatch(setloading(false));
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };
};
