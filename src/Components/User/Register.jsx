import React from "react";
import "./login.css";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import qr from "../../assets/QR.png";
import Header from "../Header/Header";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Api
import { useDispatch } from "react-redux";
import { SignUp } from "../../Reducer/UserReducers";
function Login() {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const [transactionID, settransactionID] = useState("");
  const [alignment, setAlignment] = useState("UPI");
  const [pay, setpay] = React.useState("off");
  const userData = { name, email, password, confirmpass, transactionID };
  const Register = (event) => {
    event.preventDefault();
    Dispatch(SignUp(userData, Navigate));
  };
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <Header />
      <div className="log-page">
        <div className="log">
          <h1>Sign Up</h1>
          <p id="note">
            Note: All information provided through our Academy is for
            educational purpose only. Do not take it as aany kind of financial
            or investment advice.Before investment do your own reasearch. We are
            not responsible for any Profit or Loss
          </p>
          <form>
            <Stack spacing={3} direction={"column"}>
              <TextField
                size="small"
                required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                label="Name"
                variant="outlined"
              />
              <TextField
                size="small"
                required
                label="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                variant="outlined"
              />
              <TextField
                size="small"
                type="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                required
                label="Password"
                variant="outlined"
              />
              <TextField
                size="small"
                type="password"
                required
                value={confirmpass}
                onChange={(e) => {
                  setconfirmpass(e.target.value);
                }}
                label="Confirm Password"
                variant="outlined"
              />

              <Stack>
                <Button
                  onClick={() => {
                    setpay("On");
                  }}
                  variant="contained"
                  size="small"
                >
                  Pay ₹499
                </Button>
                <p>OR</p>
                <Button
                  onClick={Register}
                  variant="contained"
                  size="small"
                  type="submit"
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </form>
          <p>
            Already have a account?<Link to={"/sign-in"}>Sign In</Link>
          </p>
        </div>
        {pay === "On" && (
          <div className="payment">
            <div className="pay">
              <span>Payment</span>
            </div>
            <div className="toggle">
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton size="small" value="UPI">
                  UPI
                </ToggleButton>
                <ToggleButton size="small" value="QR">
                  QR
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="display">
              {alignment === "QR" ? (
                <img src={qr} alt="" />
              ) : (
                <div className="upi">
                  <p>8436042649@paytm</p>
                </div>
              )}
            </div>
            <TextField
              size="small"
              type="text"
              value={transactionID}
              onChange={(e) => {
                settransactionID(e.target.value);
              }}
              label="Transaction ID"
              variant="outlined"
            />
            <Button
              onClick={() => {
                setpay("Off");
              }}
              variant="contained"
              size="small"
            >
              Submit
            </Button>
          </div>
        )}
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
