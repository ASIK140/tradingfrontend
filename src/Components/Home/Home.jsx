import React, { useEffect } from "react";
import Header from "../Header/Header";
import "./Home.css";
import img from "../../assets/6365645.jpg";
import Course from "../Courses/Course";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Certificates from "./Certificates";
import Services from "../Services/Services";
import { getAllRes } from "../../Reducer/AdminReducer";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  const Dispatch = useDispatch();
  const Resources = useSelector((state) => state.admin.data.Resource);
  useEffect(() => {
    Dispatch(getAllRes());
  }, []);
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div className="design">
        <div className="con">
          <p>
            START YOUR TRADING JOURNEY <br /> <span>TODAY</span>
          </p>
          <button>Join Us</button>
        </div>
        <img src={img} alt="" />
      </div>

      <div id="services-sec" className="services-con">
        <Services />
      </div>
      <div id="resource-sec" className="Courses">
        <div className="head">
          <h2>Resources</h2>
        </div>
        <div className="course-con">
          {Resources &&
            Resources.map((res) => <Course key={res._id} url={res.Url} />)}
        </div>
      </div>

      <div className="certificates-con">
        <Certificates />
      </div>

      <div id="about-sec" className="about-page">
        <About />
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Home;
