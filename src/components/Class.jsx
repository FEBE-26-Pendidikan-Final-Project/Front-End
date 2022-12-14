import React from "react";
import { useNavigate } from "react-router-dom";

function Class(props) {
  const navigate = useNavigate();
  const handleOpen = () => {
    navigate(`/literations/${props.idClass}`);
  };
  const handleOpenUser = () => {
    navigate(`/literations/${props.idClass}`);
    localStorage.setItem("idClassTaken", props.idClassTaken);
  };

  if (localStorage.getItem("role") === "teacher") {
    return (
      <div>
        <div
          className="card"
          style={{ borderRadius: "20px", minHeight: "250px" }}
        >
          <div
            className="bg-success mx-2 my-2"
            style={{
              height: "100px",
              borderRadius: "20px",
              opacity: "0.5",
            }}
          ></div>
          <div className="card-body">
            <h5 className="title" style={{ color: "#334" }}>
              {props.className}
            </h5>
            <div className="d-grid">
              <button
                className="btn btn-outline-success mt-2"
                onClick={handleOpen}
              >
                Open
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (localStorage.getItem("role") == "user") {
    return (
      <div>
        <div
          className="card"
          style={{ borderRadius: "20px", minHeight: "250px" }}
        >
          <div
            className="bg-primary mx-2 my-2"
            style={{ height: "100px", borderRadius: "20px", opacity: "0.5" }}
          ></div>
          <div className="card-body">
            <h5 className="title" style={{ color: "#334" }}>
              {props.className}
            </h5>
            <div className="d-grid">
              <button
                className="btn btn-outline-primary mt-2"
                onClick={handleOpenUser}
              >
                Open
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Class;
