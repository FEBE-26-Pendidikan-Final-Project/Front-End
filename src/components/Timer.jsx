import React from "react";

function Timer(props) {
  return (
    <div
      className="container d-flex justify-content-between py-3 px-3 shadow-sm"
      style={{ backgroundColor: "#fff", borderRadius: "20px" }}
    >
      {props.title}
      <span id="literation-title"></span>{" "}
      <span className="text-danger" id="timer">
        00.10.00
      </span>
    </div>
  );
}

export default Timer;
