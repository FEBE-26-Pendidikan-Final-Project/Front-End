import axios from "axios";
import React, { useEffect, useState } from "react";

function DataUsers({ id, nama, email }) {
  const [data, setData] = useState("");
  const authadmin =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdlMWNhNzZiZDFmZjA4MjhlZmQxMzciLCJpYXQiOjE2Njk4MjYwNzZ9.Sv2nO1KMR3U5laG2uVJSOUxa148YQK4Lv22ois9AYQM";

  const header = {
    authadmin: authadmin,
  };

  return (
    <>
      <div
        className="card ms-3 mt-3"
        style={{ borderRadius: "20px", height: "350px", width: "250px" }}
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
          <p className="title" style={{ color: "#334" }}>
            {id}
          </p>
          <p className="title" style={{ color: "#334" }}>
            {nama}
          </p>
          <p className="title" style={{ color: "#334" }}>
            {email}
          </p>
          <div className="d-grid mb-0 bottom-0">
            <button className="btn btn-outline-danger mt-3">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataUsers;
