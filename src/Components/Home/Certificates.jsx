import React from "react";
import img from "../../assets/certificate.jpg";
function About() {
  return (
    <div>
      <div className="about">
        <img src={img} alt="" />
        <div className="about-text">
          <h1>Certificate</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur
            quidem aperiam officiis expedita enim accusamus, illum sapiente illo
            ipsam nobis delectus ipsum, amet assumenda?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
