import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import Details from "./Page/Details";
import ChangePass from "./Page/ChangePass";
import Sentiments from "./Page/Sentiments";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Crypto from "./Page/Crypto";
import Dex from "./Page/Dex";
import Resource from "./Page/Resource";
import { SignOut, userDetails } from "../../Reducer/UserReducers";
import { useNavigate, Link } from "react-router-dom";
import { updateProfile } from "../../Reducer/UserReducers";
import Loader from "../Loader/Loader";
function Profile() {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const [name, setname] = useState("");
  const { user } = useSelector((state) => state.user.user);
  const [menuData, setMenuData] = useState("Details");
  const [viewnav, setviewnav] = useState(false);
  const loading = useSelector((state) => state.user.loading);
  const View = () => {
    setviewnav(!viewnav);
  };
  const ChangeData = (type) => {
    setMenuData(type);
    setviewnav(!viewnav);
  };
  const logOut = () => {
    Dispatch(SignOut(Navigate));
  };
  useEffect(() => {
    Dispatch(userDetails());
    setname(user && user.name);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="profile">
          <div className="sec">
            <div className="menu-icon">
              <button onClick={View} aria-label="delete" size="large">
                {viewnav ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
            <div className="pro-nav" id="pn">
              {viewnav && (
                <div className="nav">
                  <button
                    onClick={() => {
                      ChangeData("Details");
                    }}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      ChangeData("Sentiments");
                    }}
                  >
                    Market Sentiments
                  </button>
                  <button
                    onClick={() => {
                      ChangeData("Crypto");
                    }}
                  >
                    Crypto Signals
                  </button>
                  <button
                    onClick={() => {
                      ChangeData("Dex");
                    }}
                  >
                    Dex Signals
                  </button>
                  <button
                    onClick={() => {
                      ChangeData("Resource");
                    }}
                  >
                    Crypto Educations
                  </button>
                  <button
                    onClick={() => {
                      ChangeData("Password");
                    }}
                  >
                    Change Password
                  </button>
                  <button onClick={logOut}>Sign Out</button>
                </div>
              )}
            </div>
            <div className="avtar">
              <div className="home-btn">
                <Link to={"/"}>
                  {" "}
                  <button>
                    <HomeIcon />
                  </button>
                </Link>
              </div>
              <div className="profile-img">
                <div className="img"></div>
                <h1>{name}</h1>
              </div>
              <div className="nav-hide">
                <div className="nav">
                  <button
                    onClick={() => {
                      ChangeData("Details");
                    }}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      ChangeData("Sentiments");
                    }}
                  >
                    Market Sentiments
                  </button>
                  <button
                    onClick={() => {
                      ChangeData("Crypto");
                    }}
                  >
                    Crypto Signals
                  </button>
                  <button
                    onClick={() => {
                      ChangeData("Dex");
                    }}
                  >
                    Dex Signals
                  </button>
                  <button
                    onClick={() => {
                      ChangeData("Resource");
                    }}
                  >
                    Crypto Educations
                  </button>
                  <button
                    onClick={() => {
                      ChangeData("Password");
                    }}
                  >
                    Change Password
                  </button>
                  <button onClick={logOut}>Sign Out</button>
                </div>
              </div>
            </div>
            <div className="page">
              {menuData === "Details" && <Details />}
              {menuData === "Password" && <ChangePass id={user && user._id} />}
              {menuData === "Resource" && <Resource />}
              {menuData === "Sentiments" && <Sentiments />}
              {menuData === "Dex" && <Dex />}
              {menuData === "Crypto" && <Crypto />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
