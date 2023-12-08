import React from "react";
function Course(props) {
  return (
    <div className="container">
      <iframe
        width="100%"
        height="100%"
        src={props.url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Course;
