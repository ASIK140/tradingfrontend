import React, { useEffect, useState } from "react";
import "./login.css";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
//Api
import { SignIn } from "../../Reducer/UserReducers";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
//Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const logdata = { email, password };
  const login = async (event) => {
    event.preventDefault();
    Dispatch(SignIn(logdata, Navigate));
  };
  return (
    <>
      <Header />
      <div className="log-page">
        <div className="log">
          <h1>Sign In</h1>
          <form>
            <Stack spacing={3} direction={"column"}>
              <TextField
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
                label="Email"
                variant="outlined"
              />
              <TextField
                type="password"
                value={password}
                onChange={(e) => {
                  setpass(e.target.value);
                }}
                required
                label="Password"
                variant="outlined"
              />
              <span>Forgot Password?</span>
              <Button
                onClick={login}
                variant="contained"
                size="large"
                type="submit"
              >
                Sign in
              </Button>
            </Stack>
          </form>
          <p>
            Dont have a account? <Link to={"/sign-up"}>Sign Up</Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Login;
