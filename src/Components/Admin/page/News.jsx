import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateNews from "./CreateNews";
import "./Style.css";
import Loader from "./Loader";
import { useState, useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNews, getAllNews } from "../../../Reducer/AdminReducer";
function News() {
  const Dispatch = useDispatch();
  const [render, userender] = useReducer((x) => x + 1, 0);
  const [status, setstatus] = useState(false);
  const ChangeStatus = () => {
    setstatus(!status);
  };
  const News = useSelector((state) => state.admin.data.News);
  const { loading } = useSelector((state) => state.admin);
  useEffect(() => {
    if (!status) {
      Dispatch(getAllNews());
    }
  }, [render, status]);

  const Delete = (id) => {
    const confirm = window.confirm("Want to Delete This?");
    if (confirm) {
      Dispatch(deleteNews(id));
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
              <h1>Crypto News</h1>
              <div onClick={ChangeStatus} className="add-icon">
                <AddIcon />
              </div>
            </div>
            {status && (
              <div className="res-card">
                <CreateNews fun={ChangeStatus} />
              </div>
            )}
            <div className="users">
              {News &&
                News.map((dex) => {
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

export default News;
