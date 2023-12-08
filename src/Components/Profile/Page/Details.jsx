import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../Reducer/UserReducers";
import "./Style.css";
function Details() {
  const { user } = useSelector((state) => state.user.user);
  const Dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [payment, setpayment] = useState("");
  const [phone, setphone] = useState("Please Add you Phone No.");
  const [edit, setedit] = useState(false);
  const Update = () => {
    Dispatch(updateProfile({ name, email, phone }, user._id));
  };
  useEffect(() => {
    if (user) {
      setname(user.name);
      setemail(user.email);
      setpayment(user.payment);
      setphone(user.phone);
    }
  }, [user]);
  return (
    <div className="pro-del">
      {edit ? (
        <div className="fix-details">
          <div className="details">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <label>Phone</label>
            <input
              type="email"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
            <label>Payment Status</label>
            <input
              type="text"
              value={payment}
              onChange={(e) => {
                setpayment(e.target.value);
              }}
              disabled
            />
          </div>
          <button
            onClick={() => {
              Update();
              setedit(false);
            }}
            className="upbtn"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="fix-details">
          <div className="details">
            <label>Name</label>
            <input
              disabled
              type="text"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <label>Email</label>
            <input
              disabled
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <label>Phone</label>
            <input
              disabled
              type="email"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
            <label>Payment Status</label>
            <input
              type="text"
              value={payment}
              onChange={(e) => {
                setpayment(e.target.value);
              }}
              disabled
            />
          </div>
          <button
            onClick={() => {
              setedit(true);
            }}
            className="upbtn"
          >
            Update Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default Details;
