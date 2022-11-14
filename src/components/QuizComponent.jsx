import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuizById } from "../redux/action/quizAction";
import Timer from "./Timer";

function QuizComponent() {
  const dispatch = useDispatch();
  const { quizz } = useSelector((state) => state.quiz);
  // console.log(quizz.quiz);
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    dispatch(getQuizById(id));
  }, []);
  const handleSubmit = () => {
    alert("Selamat jawabanmu betul");
  };
  return (
    <div>
      <section id="quiz-section" className="mx-2">
        <Timer title={quizz.title} />
        <div className="container mt-3 py-2 px-3 shadow-sm" style={{ backgroundColor: "#fff", borderRadius: "20px" }}>
          <p style={{ textAlign: "justify" }} className="mt-2" id="quiz">
            {quizz.quiz.question.question1}
          </p>
          <form action="">
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="answer" data-id="0" id="choice0" />
              <label className="form-check-label" htmlFor="choice0">
                <span className="choice">A.</span>
                <span className="mx-2" id="choiceText0">
                  {quizz.quiz.question.answer[0]}
                </span>
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="answer" data-id="1" id="choice1" />
              <label className="form-check-label" htmlFor="choice1">
                <span className="choice">B.</span>
                <span className="mx-2" id="choiceText1">
                  {quizz.quiz.question.answer[1]}
                </span>
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="answer" data-id="2" id="choice2" />
              <label className="form-check-label" htmlFor="choice2">
                <span className="choice">C.</span>
                <span className="mx-2" id="choiceText2">
                  {quizz.quiz.question.answer[2]}
                </span>
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="answer" data-id="3" id="choice3" />
              <label className="form-check-label" htmlFor="choice3">
                <span className="choice">D.</span>
                <span className="mx-2" id="choiceText3">
                  {quizz.quiz.question.answer[3]}
                </span>
              </label>
            </div>
          </form>
        </div>
        <div className="container my-3">
          <div className="d-grid">
            <button className="btn btn-primary" type="button" id="btn-finish" onClick={() => handleSubmit()}>
              Finish
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuizComponent;
