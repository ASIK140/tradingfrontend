import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePass } from "../../../Reducer/UserReducers";
import "./Style.css";
function ChangePass(props) {
  const Dispatch = useDispatch();
  const [oldpass, setoldpass] = useState("");
  const [newpass, setnewpass] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const Change = () => {
    Dispatch(changePass({ oldpass, newpass, confirmpass }, props.id));
  };
  return (
    <div className="ChangePass">
      <div className="fix-details">
        <div className="details">
          <label>Old Password</label>
          <input
            required
            type="text"
            value={oldpass}
            onChange={(e) => {
              setoldpass(e.target.value);
            }}
          />
          <label>New Password</label>
          <input
            required
            type="email"
            value={newpass}
            onChange={(e) => {
              setnewpass(e.target.value);
            }}
          />
          <label>Confirm Password</label>
          <input
            required
            type="email"
            value={confirmpass}
            onChange={(e) => {
              setconfirmpass(e.target.value);
            }}
          />
        </div>
        <button onClick={Change} type="submit" className="upbtn">
          Change
        </button>
      </div>
    </div>
  );
}

export default ChangePass;
