import React, { useState } from "react";
import "../css/modal.css";
import buletan1 from "../assets/img/buletan1.png";
import axios from "axios";

function JoinClass() {
  const [joinClass, setJoinClass] = useState("");

  const header = {
    authuser: localStorage.getItem("token"),
  };

  const handleJoin = () => {
    axios
      .post(
        `https://back-end-production-a765.up.railway.app/kelasTaken/`,
        {
          user: localStorage.getItem("id"),
          kelas: "63876a7ff2f675799760ab31",
        },
        {
          headers: header,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <button type="button" className="btn btn-primary btn-join-class" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Join Class
      </button>

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-light title-modal" id="exampleModalLabel">
                Enter your class code to join
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center mt-3 position-relative">
              <div className="group-input">
                <input
                  type="text"
                  className="text-center col-md-8 input-code"
                  maxLength={6}
                  required
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={joinClass}
                  onChange={(e) => setJoinClass(e.target.value)}
                />
              </div>
            </div>
            <div className="footer mx-auto">
              <button
                data-bs-dismiss="modal"
                type="button"
                className="btn btn-primary btn-join-modal p-0"
                onClick={() => handleJoin()}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinClass;
