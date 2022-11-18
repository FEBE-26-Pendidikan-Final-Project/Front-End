import React from "react";
import { useNavigate } from "react-router-dom";

function Class() {
  const navigate = useNavigate();
  const handleOpen = () => {
    navigate("/literations");
  };
  return (
    <div>
      <div className="card" style={{ borderRadius: "20px" }}>
        <div className="bg-primary mx-2 my-2" style={{ height: "100px", borderRadius: "20px", opacity: "0.5" }}></div>
        <div className="card-body">
          <h5 className="title" style={{ color: "#334" }}>
            Ilmu Pengetahuan Alam
          </h5>
          <p className="text" style={{ color: "#999" }}>
            Literasi bacaan tentang Alam
          </p>
          <div className="d-grid">
            <button className="btn btn-outline-primary" onClick={handleOpen}>
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;
