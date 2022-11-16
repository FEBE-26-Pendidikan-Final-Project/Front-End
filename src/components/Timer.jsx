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
        <span>{props.timerMinutes < 10 ? "0" + props.timerMinutes : props.timerMinutes}</span>:
        <span>{props.timerSeconds < 10 ? "0" + props.timerSeconds : props.timerSeconds}</span>
      </span>
    </div>
  );
}

export default Timer;
