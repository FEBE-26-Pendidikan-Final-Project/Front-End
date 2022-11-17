import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Timer(props) {
  const [timerMinutes, setTimerMinutes] = useState(props.minute);
  const [timerSeconds, setTimerSeconds] = useState(props.second);
  const navigate = useNavigate();

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setTimerSeconds(timerSeconds - 1);

      if (timerSeconds === 1) {
        setTimerMinutes(timerMinutes - 1);
        setTimerSeconds(59);

        if (timerMinutes >= 0 && timerMinutes < 1) {
          setTimerMinutes(0);
          setTimerSeconds(1);
          swal("Waktu habis", "Waktumu habis", "warning", {
            timer: 1000,
          }).then(function () {
            localStorage.setItem("score", 0);
            navigate(props.navigation);
          });
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div
      className="container d-flex justify-content-between py-3 px-3 shadow-sm"
      style={{ backgroundColor: "#fff", borderRadius: "20px" }}
    >
      {props.title}
      <span id="literation-title"></span>{" "}
      <span className="text-danger" id="timer">
        <span>{timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}</span>:
        <span>{timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</span>
      </span>
    </div>
  );
}

export default Timer;
