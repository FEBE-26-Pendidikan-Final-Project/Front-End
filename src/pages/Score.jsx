import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import smiling from "../assets/icon/smiling.png";
import sad from "../assets/icon/sad.png";
import { useNavigate, useParams } from "react-router-dom";

function Score() {
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  });
  const { userId } = useParams();
  const navigate = useNavigate();
  const [score, setScore] = useState(localStorage.getItem("score"));

  return (
    <div>
      <Menu />
      <section id="quiz-score" className="mx-2">
        <div className="container text-center">
          <div
            className={
              score < 100 ? "alert alert-danger" : "alert alert-success"
            }
            role="alert"
            id="alert"
          >
            {score < 100
              ? "Jangan putus asa, terus tingkatkan literasi membacamu."
              : "Tetap semangat dan terus tingkatkan literasi membacamu."}
          </div>
          <div className="container">
            <h3>Poin yang kamu dapat</h3>
            <h3>
              + <span id="point">{score}</span>
            </h3>
            <div className="text-center my-4">
              <img src={score < 100 ? sad : smiling} alt="" width="50px" />
            </div>
            <p id="ket"></p>
          </div>
        </div>
        <div className="container my-3">
          <div className="text-center">
            <button
              className="btn btn-primary px-5"
              type="button"
              id="btn-ok"
              style={{ borderRadius: "20px" }}
              onClick={() => navigate(`/home`)}
            >
              Ok
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Score;
