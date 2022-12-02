import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LiterationList(props) {
  const idQuiz = props.id;
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleDelete = () => {
    const header = {
      authadmin: localStorage.getItem("token"),
    };
    axios
      .delete(
        `https://back-end-production-a765.up.railway.app/Quiz/${idQuiz}`,
        {
          headers: header,
        }
      )
      .then(function (response) {
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleUpdate = (id) => {
    navigate(`/teacher/quizUpdate/${id}`);
  };

  if (localStorage.getItem("role") === "teacher") {
    return (
      <div>
        <li
          className="shadow-sm my-3 d-flex justify-content-between"
          style={{ cursor: "default" }}
        >
          {props.title}
          <span>
            <i
              className="bi bi-pencil-fill text-success me-2"
              onClick={() => handleUpdate(props.id)}
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-trash-fill text-danger"
              onClick={() => handleDelete()}
              style={{ cursor: "pointer" }}
            ></i>
          </span>
        </li>
      </div>
    );
  }
  return (
    <div>
      <li
        className="shadow-sm my-3"
        onClick={() => navigate(`/text-quiz/${props.id}`)}
      >
        {props.title}
      </li>
    </div>
  );
}

export default LiterationList;
