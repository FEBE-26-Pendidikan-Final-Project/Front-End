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
            style={{https://github.com/FEBE-26-Pendidikan-Final-Project/Front-End/pull/17/conflict?name=src%252Fcomponents%252FClass.jsx&ancestor_oid=d4b8643440e6cbf4e7b16aafa9e1186e4831c635&base_oid=edebd17836a7a42793cc1dfa1c29b7aef4f9746a&head_oid=ff31ae63ccee5d7459c161d8528aaf2a1657897b
              height: "100px",
              borderRadius: "20px",
              opacity: "0.5",
            }}
          ></div>
          <div className="card-body">
            <h5 className="title" style={{ color: "#334" }}>
              {props.className}
            </h5>
            {/* <p className="text" style={{ color: "#999" }}>
              Literasi bacaan tentang Alam
            </p> */}
            <div className="d-grid">
              <button
                className="btn btn-outline-primary mt-2"
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
            className=" mx-2 my-2"
            style={{ height: "100px", borderRadius: "20px", opacity: "0.5" }}
          ></div>
          <div className="card-body">
            <h5 className="title" style={{ color: "#334" }}>
              {props.className}
            </h5>
            {/* <p className="text" style={{ color: "#999" }}>
            Literasi bacaan tentang Alam
          </p> */}
          <div className="d-grid">
            <button className="btn btn-outline-primary mt-2" onClick={handleOpenUser}>
              Open
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Class;
