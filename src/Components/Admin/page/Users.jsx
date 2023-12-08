import React, { useEffect, useReducer, useState } from "react";
import "./Style.css";
import SearchIcon from "@mui/icons-material/Search";
import GroupIcon from "@mui/icons-material/Group";
import LaunchIcon from "@mui/icons-material/Launch";
import { getAllUsers } from "../../../Reducer/AdminReducer";
import { useDispatch, useSelector } from "react-redux";
import BlockIcon from "@mui/icons-material/Block";
import UserCard from "./UserCard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { getData } from "../../../Reducer/AdminReducer";
import Loader from "./Loader";
function Users() {
  const Dispatch = useDispatch();

  let users = useSelector((state) => state.admin.data.users);
  const { loading } = useSelector((state) => state.admin);
  const [search, setsearch] = useState("");
  const [User, setUser] = useState({});
  const [status, setstatus] = useState(false);
  const ChangeStatus = () => {
    setstatus(!status);
  };
  const SearchUser = () => {
    users = users.filter((user) => {
      return search === user.email;
    });
    Dispatch(getData({ users }));
  };
  useEffect(() => {
    if (search === "") {
      Dispatch(getAllUsers());
    }
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="admin-user">
          <div className="admin-header">
            <h1>Users</h1>
            <div className="search">
              <input
                placeholder="Find user using email.."
                value={search}
                type="text"
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
              <button onClick={SearchUser}>
                <SearchIcon />
              </button>
            </div>
          </div>
          {status && (
            <div className="user-card">
              <UserCard fun={{ ChangeStatus, User }} />
            </div>
          )}
          <div className="users">
            {users &&
              users.map((user) => {
                return (
                  <div
                    className={
                      user.payment === "Confirmed" ? "user confirm" : "user"
                    }
                    key={user._id}
                  >
                    <div className="info">
                      <h1> {user.name} </h1>
                      <span>{user.email}</span>
                    </div>
                    <div className="user-icon">
                      <button>
                        {user.role === "admin" ? (
                          <AdminPanelSettingsIcon />
                        ) : (
                          <GroupIcon />
                        )}
                      </button>
                      <button>
                        <BlockIcon />
                      </button>
                      <button
                        onClick={() => {
                          setUser(user);
                          ChangeStatus();
                        }}
                      >
                        <LaunchIcon />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default Users;
