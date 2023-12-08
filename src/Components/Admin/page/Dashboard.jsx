import React, { useState } from "react";
import "./Style.css";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import GroupIcon from "@mui/icons-material/Group";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../../Reducer/AdminReducer";
import axios from "axios";
function Dashboard(props) {
  const Dispatch = useDispatch();
  let users = useSelector((state) => state.admin.data.users);
  let [feedback, setfeed] = useState([]);
  let total_rev = [];
  if (users) {
    total_rev = users.filter((user) => {
      return user.payment === "Confirmed";
    });
  }
  const getFeed = async () => {
    const { data } = await axios.get("/api/v1/allfeed");
    setfeed(data.feedback);
  };

  useEffect(() => {
    getFeed();
    Dispatch(getAllUsers());
  }, []);
  return (
    <div className="dash">
      <div className="box">
        <div className="d-box" id="revenue">
          <div className="icon">
            <SignalCellularAltIcon />
          </div>
          <div className="count">
            <h1>₹{(total_rev && total_rev.length) * 499}</h1>
          </div>
          <span>Total Revenue</span>
        </div>
        <div
          onClick={() => {
            props.setpage("Users");
          }}
          className="d-box"
          id="total-users"
        >
          <div className="icon">
            <GroupIcon />
          </div>
          <div className="count">
            <h1>{users && users.length}</h1>
          </div>
          <span>Total Users</span>
        </div>
        <div
          onClick={() => {
            props.setpage("Users");
          }}
          className="d-box"
          id="confirm-user"
        >
          <div className="icon">
            <GroupIcon />
          </div>
          <div className="count">
            <h1>{total_rev && total_rev.length}</h1>
          </div>
          <span>Confrim Users</span>
        </div>
        <div
          onClick={() => {
            props.setpage("Feedback");
          }}
          className="d-box"
          id="feedback"
        >
          <div className="icon">
            <ChatBubbleIcon />
          </div>
          <div className="count">
            <h1>{feedback && feedback.length}</h1>
          </div>
          <span>Feedback</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
