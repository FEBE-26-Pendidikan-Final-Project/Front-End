import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeacherQuizComponent() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [literation, setLiteration] = useState("");
  const [quiz, setQuiz] = useState("");

  const [choiceA, setChoiceA] = useState("");
  const [choiceB, setChoiceB] = useState("");
  const [choiceC, setChoiceC] = useState("");
  const [choiceD, setChoiceD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState();
  const choice = [choiceA, choiceB, choiceC, choiceD];

  const handleSave = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(literation);
    // console.log(quiz);
    // console.log(choiceA);
    // console.log(choiceB);
    // console.log(choiceC);
    // console.log(choiceD);
    // console.log(choice);
    // console.log(correctAnswer);
    axios
      .post("https://634c0ee3317dc96a30906a1a.mockapi.io//literation", {
        title: title,
        text: literation,
        quiz: {
          question: {
            question1: quiz,
            answer: choice,
            answerCorrect: parseInt(correctAnswer),
          },
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <section className="quiz-section mx-2">
        <div className="container my-2">
          <h3 className="text-center mb-4">Add Quiz</h3>
          <hr />
          <form onSubmit={handleSave}>
            <div className="mb-3">
              <input
                value={title}
                type="text"
                className="form-control shadow-sm px-3"
                id="exampleFormControlInput1"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                style={{ border: "0px", borderRadius: "20px" }}
              />
            </div>
            <div className="mb-3">
              <textarea
                value={literation}
                className="form-control shadow-sm px-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Literation"
                onChange={(e) => setLiteration(e.target.value)}
                style={{ border: "0px", borderRadius: "20px" }}
              ></textarea>
            </div>
            <div className="mb-3">
              <textarea
                value={quiz}
                className="form-control shadow-sm px-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Quiz"
                onChange={(e) => setQuiz(e.target.value)}
                style={{ border: "0px", borderRadius: "20px" }}
              ></textarea>
            </div>
            <div className="text-center mb-3">Choice</div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    A
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={choiceA}
                    onChange={(e) => setChoiceA(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    B
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={choiceB}
                    onChange={(e) => setChoiceB(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    C
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={choiceC}
                    onChange={(e) => setChoiceC(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    D
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={choiceD}
                    onChange={(e) => setChoiceD(e.target.value)}
                  />
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                      >
                        <option value="0">Correct Answer</option>
                        <option value="0">A</option>
                        <option value="1">B</option>
                        <option value="2">C</option>
                        <option value="3">D</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-grid">
                <button className="btn" type="submit" id="btn-finish" style={{ backgroundColor: "#14c38e", color: "#fff" }}>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default TeacherQuizComponent;
