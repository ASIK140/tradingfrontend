import React, { useState, useReducer } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CreateSen from "./CreateSen";
import { deleteSen, getAllSen } from "../../../Reducer/AdminReducer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import "./Style.css";
import { useEffect } from "react";
function Sentiment() {
  const Dispatch = useDispatch();
  const [render, userender] = useReducer((x) => x + 1, 0);
  const [status, setstatus] = useState(false);
  const Sentiments = useSelector((state) => state.admin.data.Sentiments);

  const loading = useSelector((state) => state.admin.loading);
  const ChangeStatus = () => {
    setstatus(!status);
  };
  useEffect(() => {
    if (!status) {
      Dispatch(getAllSen());
    }
  }, [render, status]);

  const Delete = (id) => {
    const confirm = window.confirm("Want to Delete This?");
    if (confirm) {
      Dispatch(deleteSen(id));
      userender();
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="pa">
            <div className="admin-header">
              <h1>Sentiments</h1>
              <div onClick={ChangeStatus} className="add-icon">
                <AddIcon />
              </div>
            </div>
            {status && (
              <div className="res-card">
                <CreateSen fun={ChangeStatus} />
              </div>
            )}
            <div className="users">
              {Sentiments &&
                Sentiments.map((sen) => {
                  return (
                    <div className="user" key={sen._id}>
                      <div className="info">
                        <h1>{sen.Title}</h1>
                      </div>
                      <div className="user-icon">
                        <a target="_blank" href={sen.Url}>
                          <button>
                            <VisibilityIcon />
                          </button>
                        </a>
                        <button
                          onClick={() => {
                            Delete(sen._id);
                          }}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sentiment;
