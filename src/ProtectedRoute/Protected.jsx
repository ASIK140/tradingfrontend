import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import NotFound from "../Components/NotFound/NotFound";
function Protected({ isAuth }) {
  const Navigate = useNavigate();
  if (!isAuth) {
    return <NotFound />;
  }
  return <Outlet />;
}

export default Protected;
