import React from "react";
import { useNavigate } from "react-router-dom";

function LiterationList(props) {
  const navigate = useNavigate();
  if (localStorage.getItem("role") === "teacher") {
    return (
      <div>
        <li className="shadow-sm my-3 d-flex justify-content-between" style={{ cursor: "default" }}>
          {props.title}
          <span>
            <i className="bi bi-pencil-fill text-success me-2" style={{ cursor: "pointer" }}></i>
            <i
              className="bi bi-trash-fill text-danger"
              onClick={() => alert("item dihapus")}
              style={{ cursor: "pointer" }}
            ></i>
          </span>
        </li>
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
