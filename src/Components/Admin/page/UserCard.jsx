import React, { useState } from "react";
import "./Style.css";
import CloseIcon from "@mui/icons-material/Close";
import { updateUser, getAllUsers } from "../../../Reducer/AdminReducer";
import { useDispatch, useSelector } from "react-redux";
function UserCard(props) {
  const Dispatch = useDispatch();
  const { User } = props.fun;
  const [role, setrole] = useState(User.role);
  const [trId, settrId] = useState(User.transactionID);
  const [payment, setpayment] = useState(User.payment);
  const [phone, setphone] = useState(User.phone);

  const Update = () => {
    const userData = { role, payment };
    Dispatch(updateUser(userData, User._id));
    props.fun.ChangeStatus();
  };
  return (
    <div className="card">
      <div
        onClick={() => {
          props.fun.ChangeStatus();
        }}
        className="close-icon"
      >
        <CloseIcon fontSize="large" />
      </div>
      <div className="displayName">
        <h1>{User.name}</h1>
        <span>{User.email}</span>
      </div>
      <div className="inputs">
        <label>Phone</label>
        <input
          type="text"
          disabled
          value={phone ? phone : "Not Update"}
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
        <label>TransactionID</label>
        <input
          disabled
          type="text"
          value={trId ? trId : "Not Payment"}
          onChange={(e) => {
            settrId(e.target.value);
          }}
        />
        <label>Payment Status</label>
        {payment === "Confirmed" ? (
          <select
            onChange={(e) => {
              setpayment(e.target.value);
            }}
            value={payment}
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
          </select>
        ) : (
          <select
            onChange={(e) => {
              setpayment(e.target.value);
            }}
            value={payment}
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
          </select>
        )}
        <label>Role</label>
        {role === "admin" ? (
          <select
            onChange={(e) => {
              setrole(e.target.value);
            }}
            value={role}
          >
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        ) : (
          <select
            value={role}
            onChange={(e) => {
              setrole(e.target.value);
            }}
          >
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        )}
        <button onClick={Update}>Submit</button>
      </div>
    </div>
  );
}

export default UserCard;
