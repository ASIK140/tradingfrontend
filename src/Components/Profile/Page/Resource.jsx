import React from "react";
import Course from "../../Courses/Course";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllRes } from "../../../Reducer/AdminReducer";
import { useEffect } from "react";
function Resource() {
  const Resources = useSelector((state) => state.admin.data.Resource);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(getAllRes());
  }, []);
  return (
    <div className="Resource">
      {Resources &&
        Resources.map((res) => <Course key={res._id} url={res.Url} />)}
    </div>
  );
}

export default Resource;
