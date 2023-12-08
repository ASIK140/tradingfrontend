import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { userDetails } from "../../Reducer/UserReducers";
import { HashLink as HLink } from "react-router-hash-link";
function Header() {
  const Dispatch = useDispatch();
  const [slide, setslide] = React.useState(false);
  const isAdmin = useSelector((state) => state.user.AuthA);
  const isUser = useSelector((state) => state.user.AuthU);
  const change = () => {
    setslide(!slide);
  };
  useEffect(() => {
    Dispatch(userDetails());
  }, []);
  return (
    <div>
      <header>
        <div className="logo">
          <Link to={"/"}>
            <h1>TRADING ADDA</h1>
          </Link>
        </div>
        <nav>
          <ul>
            <Link to={"/"}>
              <li>HOME</li>
            </Link>
            <HLink to="#services-sec" smooth>
              <li>SERVICES</li>
            </HLink>
            <HLink to="#resource-sec" smooth>
              <li>RESOURCE</li>
            </HLink>
            <HLink to="#about-sec" smooth>
              <li>ABOUT</li>
            </HLink>
            <Link to={"/contact"}>
              <li>CONTACT</li>
            </Link>
          </ul>
          {isUser ? (
            <Link to={"/me"}>
              <button id="profile-btn">
                <AccountCircleIcon />
                Profile
              </button>
            </Link>
          ) : (
            <Link to={"/sign-in"}>
              <button>Sign In</button>
            </Link>
          )}

          {isAdmin && (
            <Link to={"/admin"}>
              <button>Dashboard</button>
            </Link>
          )}
        </nav>
        <div className="menu">
          <IconButton onClick={change}>
            {" "}
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
      </header>
      {slide && (
        <div className="slide">
          <ul>
            <Link to={"/"}>
              <li>HOME</li>
            </Link>
            <HLink to="#services-sec" smooth>
              <li>SERVICES</li>
            </HLink>
            <HLink to="#resource-sec" smooth>
              <li>RESOURCE</li>
            </HLink>
            <HLink to="#about-sec" smooth>
              <li>ABOUT</li>
            </HLink>
            <Link to={"/contact"}>
              <li>CONTACT</li>
            </Link>
            {isUser ? (
              <Link to={"/me"}>
                <li id="profile-btn">Profile</li>
              </Link>
            ) : (
              <Link to={"/sign-in"}>
                <li>Sign In</li>
              </Link>
            )}
            {isAdmin && (
              <Link to={"/admin"}>
                <li>Dashboard</li>
              </Link>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
