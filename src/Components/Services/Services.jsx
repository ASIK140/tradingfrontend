import React from "react";
import "./Services.css";
import news from "../../assets/News.jpg";
import edu from "../../assets/Education.jpg";
import sig from "../../assets/Signals.jpg";
import mat from "../../assets/Materials.jpg";
function Services() {
  return (
    <div>
      <div className="services">
        <h1>Services</h1>
        <div className="cards">
          <div className="ser-card">
            <div className="ser-img">
              <img src={mat} alt="" />
            </div>
            <div className="ser-title">
              <h3>Crypto Materials</h3>
            </div>
            <div className="ser-btn">
              <a href="Materials.pdf" download="Crtpto Material">
                <button>View</button>
              </a>
            </div>
          </div>
          <div className="ser-card">
            <div className="ser-img">
              <img src={edu} alt="" />
            </div>
            <div className="ser-title">
              <h3>Blockchain Educations</h3>
            </div>
            <div className="ser-btn">
              <button>View</button>
            </div>
          </div>
          <div className="ser-card">
            <div className="ser-img">
              <img src={sig} alt="" />
            </div>
            <div className="ser-title">
              <h3>Crypto Signals</h3>
            </div>
            <div className="ser-btn">
              <button>View</button>
            </div>
          </div>
          <div className="ser-card">
            <div className="ser-img">
              <img src={news} alt="" />
            </div>
            <div className="ser-title">
              <h3>Crypto News</h3>
            </div>
            <div className="ser-btn">
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
