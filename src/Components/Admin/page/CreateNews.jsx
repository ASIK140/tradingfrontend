import React, { useState } from "react";
import "./Style.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { createNews } from "../../../Reducer/AdminReducer";
function UserCard(props) {
  const Dispatch = useDispatch();
  const [title, settitle] = useState("");
  const [url, seturl] = useState("");

  const Sendata = { Title: title, Url: url };
  const Create = () => {
    Dispatch(createNews(Sendata));
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
        <button onClick={Create}>Submit</button>
      </div>
    </div>
  );
}

export default UserCard;
