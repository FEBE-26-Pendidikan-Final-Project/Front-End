import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

function UserComponent({ username, email }) {
  const idUser = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(
        `https://back-end-production-a765.up.railway.app/Nilai/6381bc39818db043ac587a83`
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div
        className="card my-2"
        style={{ borderRadius: "20px", border: "0px", padding: "20px" }}
      >
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
            alt=""
            className=""
            width={"100px"}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="">{username}</h5>
          <p className="">Your Point</p>
          <h6>{email}</h6>
        </div>
      </div>
    </div>
  );
}

export default UserComponent;
