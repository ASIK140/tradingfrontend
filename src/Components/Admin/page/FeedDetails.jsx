import React from "react";
import CloseIcon from "@mui/icons-material/Close";
function FeedDetails(props) {
  const { feed } = props;
  return (
    <div>
      <div className="f-con">
        <div
          onClick={() => {
            props.fun();
          }}
          className="close-icon"
        >
          <CloseIcon fontSize="large" />
        </div>
        <h1>
          {feed.FirstName} {feed.LastName}
        </h1>
        <span>{feed.Email}</span>
        <div className="comment">
          <b>Comment:</b>
          <p>{feed.Comment}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedDetails;
