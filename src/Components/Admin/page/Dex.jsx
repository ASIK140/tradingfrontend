import React, { useEffect, useReducer } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CreateDex from "./CreateDex";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteDex, getAllDex } from "../../../Reducer/AdminReducer";
import Loader from "./Loader";
function Dex() {
  const Dispatch = useDispatch();
  const [render, userender] = useReducer((x) => x + 1, 0);
  const [status, setstatus] = useState(false);
  const ChangeStatus = () => {
    setstatus(!status);
  };
  const Dexs = useSelector((state) => state.admin.data.Dex);
  const { loading } = useSelector((state) => state.admin);
  useEffect(() => {
    if (!status) {
      Dispatch(getAllDex());
    }
  }, [render, status]);

  const Delete = (id) => {
    const confirm = window.confirm("Want to Delete This?");
    if (confirm) {
      Dispatch(deleteDex(id));
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
              <h1>Dex Signals</h1>
              <div onClick={ChangeStatus} className="add-icon">
                <AddIcon />
              </div>
            </div>
            {status && (
              <div className="res-card">
                <CreateDex fun={ChangeStatus} />
              </div>
            )}
            <div className="users">
              {Dexs &&
                Dexs.map((dex) => {
                  return (
                    <div className="user" key={dex._id}>
                      <div className="info">
                        <h1>{dex.Title}</h1>
                        <span>{dex.Description}</span>
                      </div>
                      <div className="user-icon">
                        <a href="">
                          <button>
                            <VisibilityIcon />
                          </button>
                        </a>
                        <button
                          onClick={() => {
                            Delete(dex._id);
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

export default Dex;
