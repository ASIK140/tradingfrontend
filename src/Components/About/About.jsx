import React from "react";
import "./About.css";
import Header from "../Header/Header";
import img from "../../assets/about.jpg";
function About() {
  return (
    <div>
      <div className="about">
        <div className="about-text">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur
            quidem aperiam officiis expedita enim accusamus, illum sapiente illo
            ipsam nobis delectus ipsum, amet assumenda?
          </p>
          <a href="About.pdf" download="About-Us">
            {" "}
            <button>Read More</button>
          </a>
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default About;
