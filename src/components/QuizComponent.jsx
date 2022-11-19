import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getQuiz } from "../redux/action/quizAction";
import Timer from "./Timer";
import swal from "sweetalert";
import axios from "axios";

function QuizComponent() {
  const userId = localStorage.getItem("idUser");

  const navigate = useNavigate();
  const [user, setUsers] = useState([]);
  const [answer, setAnswer] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const dispatch = useDispatch();
  // const { quizz } = useSelector((state) => state.quiz);
  // console.log(quizz.quiz);
  const { id } = useParams();
  // console.log(id);
  // useEffect(() => {
  //   dispatch(getQuiz(id));
  // }, []);
  useEffect(() => {
    axios.get(`https://634c0ee3317dc96a30906a1a.mockapi.io/literation/${id}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
      // console.log(data);
    });
  }, []);

  useEffect(() => {
    axios.get(`https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users/${userId}`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  // console.log(user.point);

  // console.log(data);
  const handleSubmit = () => {
    const correctAnswer = data.quiz.question.answerCorrect;

    if (answer != null) {
      if (answer == correctAnswer) {
        swal("Good job!", "your answer is correct!", "success", {
          timer: 3000,
        }).then(function () {
          localStorage.setItem("score", 100);
          navigate(`/score`);
          axios.put(`https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users/${userId}`, {
            point: user.point + 100,
          });
        });
      } else {
        swal("Sorry", "your answer is incorrect!", "error", {
          timer: 3000,
        }).then(function () {
          localStorage.setItem("score", 0);
          navigate(`/score`);
        });
      }
    } else {
      swal("Warning", "please choose your answer!", "warning", {
        timer: 1000,
      });
    }
  };
  if (isLoading) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <section id="quiz-section" className="mx-2">
        <Timer title={data.title} minute={5} second={1} navigation={`/score`} />
        <div className="container mt-3 py-2 px-3 shadow-sm" style={{ backgroundColor: "#fff", borderRadius: "20px" }}>
          <p style={{ textAlign: "justify" }} className="mt-2" id="quiz">
            {/* {quizz.quiz.question.question1} */}
            {data.quiz.question.question1}
          </p>
          <form action="">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="answer"
                data-id="0"
                id="choice0"
                value="0"
                onChange={(e) => setAnswer(e.target.value)}
              />
              <label className="form-check-label" htmlFor="choice0">
                <span className="choice">A.</span>
                <span className="mx-2" id="choiceText0">
                  {/* {quizz.quiz.question.answer[0]} */}
                  {data.quiz.question.answer[0]}
                </span>
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="answer"
                data-id="1"
                id="choice1"
                value="1"
                onChange={(e) => setAnswer(e.target.value)}
              />
              <label className="form-check-label" htmlFor="choice1">
                <span className="choice">B.</span>
                <span className="mx-2" id="choiceText1">
                  {/* {quizz.quiz.question.answer[1]} */}
                  {data.quiz.question.answer[1]}
                </span>
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="answer"
                data-id="2"
                id="choice2"
                value="2"
                onChange={(e) => setAnswer(e.target.value)}
              />
              <label className="form-check-label" htmlFor="choice2">
                <span className="choice">C.</span>
                <span className="mx-2" id="choiceText2">
                  {/* {quizz.quiz.question.answer[2]} */}
                  {data.quiz.question.answer[2]}
                </span>
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="answer"
                data-id="3"
                id="choice3"
                value="3"
                onChange={(e) => setAnswer(e.target.value)}
              />
              <label className="form-check-label" htmlFor="choice3">
                <span className="choice">D.</span>
                <span className="mx-2" id="choiceText3">
                  {/* {quizz.quiz.question.answer[3]} */}
                  {data.quiz.question.answer[3]}
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
