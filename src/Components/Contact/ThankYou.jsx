import React from "react";
import img from "./ThankYou.jpg";
import "./Contact.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
function ThankYou() {
  const loading = useSelector((state) => state.user.loading);

  const Navigate = useNavigate();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="thank">
          <div className="t-icon">
            <img src={img} alt="" />
          </div>
          <div className="gred">
            <h1>Thak You for your Feedback</h1>
          </div>
          <button
            onClick={() => {
              Navigate("/");
            }}
            id="t-btn"
          >
            <ArrowBackIosIcon />
            Back to Home
          </button>
        </div>
      )}
    </>
  );
}

export default ThankYou;
