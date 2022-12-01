import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LiterationList(props) {
  console.log(props);
  const idQuiz = props.id;
  const [title, setTitle] = useState("");

  const handleDelete = () => {
    const header = {
      authadmin: localStorage.getItem("token"),
    };
    axios
      .delete(`https://back-end-production-a765.up.railway.app/Quiz/${idQuiz}`, {
        headers: header,
      })
      .then(function (response) {
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleUpdate = (id) => {
    console.log(id);
    console.log(title);
  };

  const navigate = useNavigate();
  if (localStorage.getItem("role") === "teacher") {
    return (
      <div>
        <li className="shadow-sm my-3 d-flex justify-content-between" style={{ cursor: "default" }}>
          {props.title}
          <span>
            <i
              className="bi bi-pencil-fill text-success me-2"
              data-bs-toggle="modal"
              data-bs-target={"#exampleModal" + props.id}
              style={{ cursor: "pointer" }}
            ></i>
            <i className="bi bi-trash-fill text-danger" onClick={() => handleDelete()} style={{ cursor: "pointer" }}></i>
          </span>
        </li>
        <div
          class="modal fade"
          id={"exampleModal" + props.id}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content modal-content-teacher">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center mt-3 position-relative">
                <p className="text-light text-name mt-3">Title ({props.title})</p>
                <div className="group-input">
                  <input
                    type="text"
                    class="text-center col-md-8 input-code input-name"
                    required
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <p className="text-light text-desc mt-3">Class Desc</p>
                <div className="group-input">
                  <textarea name="" id="" className="col-md-8"></textarea>
                </div>
              </div>
              <div class="footer mx-auto">
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  class="btn btn-primary btn-join-modal p-0"
                  onClick={() => handleUpdate(props.id)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <li className="shadow-sm my-3" onClick={() => navigate(`/text-quiz/${props.id}`)}>
        {props.title}
      </li>
    </div>
  );
}

export default LiterationList;
