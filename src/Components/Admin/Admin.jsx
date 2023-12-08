import React from "react";
import { useState } from "react";
import "./Admin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Icons
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleIcon from "@mui/icons-material/People";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import LogoutIcon from "@mui/icons-material/Logout";
//Pages
import Dashboard from "./page/Dashboard";
import Feedback from "./page/Feedback";
import Resource from "./page/Resource";
import News from "./page/News";
import Sentiment from "./page/Sentiment";
import Dex from "./page/Dex";
import Users from "./page/Users";
//React Router
import { useNavigate } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "../../Reducer/UserReducers";
function Admin() {
  const Dispatch = useDispatch();
  const Nav = useNavigate();
  const [open, setopen] = useState(false);
  const [page, setpage] = useState("Dashboard");
  const chnagePage = (name) => {
    setpage(name);
  };
  const change = () => {
    setopen(!open);
  };
  const logOut = () => {
    Dispatch(SignOut(Nav));
  };
  return (
    <div>
      <div className="admin">
        <div className={open ? "dash-header" : "dash-header close"}>
          <div onClick={change} className="dash-menu-icon">
            <MenuIcon />
          </div>
          <div className="dash-nav">
            <button
              onClick={() => {
                chnagePage("Dashboard");
              }}
            >
              {" "}
              <GridViewIcon />
              Dashboard
            </button>
            <button
              onClick={() => {
                chnagePage("Users");
              }}
            >
              {" "}
              <PeopleIcon />
              Users
            </button>
            <button
              onClick={() => {
                chnagePage("Resource");
              }}
            >
              {" "}
              <OndemandVideoIcon />
              Resource
            </button>
            <button
              onClick={() => {
                chnagePage("Sentiment");
              }}
            >
              <SentimentSatisfiedAltIcon />
              Sentiments
            </button>
            <button
              onClick={() => {
                chnagePage("News");
              }}
            >
              <NewspaperIcon />
              Crtpto News
            </button>
            <button
              onClick={() => {
                chnagePage("Dex");
              }}
            >
              {" "}
              <SignalCellularAltIcon />
              Dex Signals
            </button>
            <button
              onClick={() => {
                chnagePage("Feedback");
              }}
            >
              <ChatBubbleIcon />
              Feedback
            </button>
          </div>
          <div className="logout">
            <button onClick={logOut}>
              <LogoutIcon />
              Logout
            </button>
          </div>
        </div>
        <div className="admin-con ex">
          {page === "Dashboard" && <Dashboard setpage={chnagePage} />}
          {page === "Users" && <Users />}
          {page === "Feedback" && <Feedback />}
          {page === "Sentiment" && <Sentiment />}
          {page === "News" && <News />}
          {page === "Dex" && <Dex />}
          {page === "Resource" && <Resource />}
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
    </div>
  );
}

export default Admin;
