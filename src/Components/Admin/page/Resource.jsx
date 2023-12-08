import React, { useState, useEffect, useReducer } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "./Style.css";
import ResourceCard from "./ResourceCard";
import CreateRes from "./CreateRes";
import { useDispatch, useSelector } from "react-redux";
import { getAllRes } from "../../../Reducer/AdminReducer";
function Resource() {
  const Dispatch = useDispatch();
  const [render, userender] = useReducer((x) => x + 1, 0);
  const Resources = useSelector((state) => state.admin.data.Resource);
  const [status, setstatus] = useState(false);
  const ChangeStatus = () => {
    setstatus(!status);
  };
  useEffect(() => {
    if (!status) {
      Dispatch(getAllRes());
    }
  }, [render, status]);
  return (
    <div className="pa">
      <div className="res-pa">
        <div className="admin-header">
          <h1>Resource</h1>
          <div onClick={ChangeStatus} className="add-icon">
            <AddIcon />
          </div>
        </div>
        {status && (
          <div className="res-card">
            <CreateRes fun={ChangeStatus} />
          </div>
        )}
        <div className="resources">
          {Resources &&
            Resources.map((res) => (
              <ResourceCard key={res._id} url={res.Url} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Resource;
