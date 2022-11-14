import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuizById } from "../redux/action/quizAction";
import Timer from "./Timer";

function TextComponent() {
  const dispatch = useDispatch();
  const { quizz } = useSelector((state) => state.quiz);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getQuizById(1));
  }, []);
  const handleQuiz = (id) => {
    navigate(`/quiz/${id}`);
  };
  return (
    <div>
      <section id="text-quiz" className="mx-2">
        <Timer title={quizz.title} />
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
            <button className="btn btn-primary" type="button" id="btn-finish" onClick={() => handleQuiz(1)}>
              Finish Read
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextComponent;
