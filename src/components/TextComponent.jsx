import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getQuiz, getQuizById } from "../redux/action/quizAction";
import Timer from "./Timer";

function TextComponent() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { quizz } = useSelector((state) => state.quiz);

  const navigate = useNavigate();

  const handleQuiz = (id) => {
    navigate(`/quiz/${id}`);
  };

  useEffect(() => {
    dispatch(getQuizById(id));
  }, []);

  return (
    <div>
      <section id="text-quiz" className="mx-2">
        {/* <h1>
          {timerMinutes}:{timerSeconds}
        </h1> */}
        <Timer title={quizz.title} minute={10} second={1} navigation={`/quiz/${id}`} />
        <div className="container mt-3 py-2 px-3 shadow-sm" style={{ backgroundColor: "#fff", borderRadius: "20px" }}>
          <h5 className="text-center mt-2" id="text-title">
            {quizz.title}
          </h5>
          <p style={{ textAlign: "justify" }} id="literation-text">
            {quizz.text}
          </p>
        </div>
        <div className="container my-3">
          <div className="d-grid">
            <button className="btn btn-primary" type="button" id="btn-finish" onClick={() => handleQuiz(id)}>
              Finish Read
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextComponent;
