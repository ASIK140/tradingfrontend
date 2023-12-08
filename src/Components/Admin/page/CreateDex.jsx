import React, { useState } from "react";
import "./Style.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { createDex } from "../../../Reducer/AdminReducer";
function UserCard(props) {
  const Dispatch = useDispatch();
  const [title, settitle] = useState("Crypto Fundamental");
  const [url, seturl] = useState("https://www.youtube.com/15htko8ndiea");
  const [des, setdes] = useState(
    "this is a free video for learning Crypto from basic to advanced"
  );
  const Sendata = { Title: title, Url: url, Description: des };
  const Create = () => {
    console.log("click");
    Dispatch(createDex(Sendata));
    props.fun();
  };
  return (
    <div className="card">
      <div
        onClick={() => {
          props.fun();
        }}
        className="close-icon"
      >
        <CloseIcon fontSize="large" />
      </div>
      <h1>Create</h1>
      <div className="inputs">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <label>Url</label>
        <input
          type="text"
          value={url}
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <label>Descriptions</label>
        <textarea
          type="text"
          value={des}
          onChange={(e) => {
            setdes(e.target.value);
          }}
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <button onClick={Create}>Submit</button>
      </div>
    </div>
  );
}

export default UserCard;
