import React, { useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { AllFeedback } from "../../../Reducer/AdminReducer";
import FeedDetails from "./FeedDetails";
import { useState } from "react";
function Feedback() {
  const [status, setstatus] = useState(false);
  const ChangeStatus = () => {
    setstatus(!status);
  };
  const Dis = useDispatch();
  const { feedback } = useSelector((state) => state.admin.data);
  const [feed, setfeed] = useState({});
  useEffect(() => {
    Dis(AllFeedback());
  }, []);
  return (
    <div className="Feedback">
      <div>
        <div className="admin-header">
          <h1>Feedback</h1>
          <div className="add-icon"></div>
        </div>
        <div className="users">
          {feedback &&
            feedback.map((feed) => (
              <div className="user" key={feed._id}>
                <div className="info">
                  <h1>
                    {feed.FirstName} {feed.LastName}
                  </h1>
                  <span>{feed.Email}</span>
                </div>
                <div className="user-icon">
                  <button
                    onClick={() => {
                      ChangeStatus();
                      setfeed(feed);
                    }}
                  >
                    <VisibilityIcon />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      {status && (
        <div className="feedDetails">
          <FeedDetails fun={ChangeStatus} feed={feed} />
        </div>
      )}
    </div>
  );
}

export default Feedback;
