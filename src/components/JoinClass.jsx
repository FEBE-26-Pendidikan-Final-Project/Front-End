import React from "react";
import "../css/modal.css";
import buletan1 from "../assets/img/buletan1.png";

function JoinClass() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-join-class"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Join Class
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-light title-modal"
                id="exampleModalLabel"
              >
                Enter your class code to join
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
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
                />
              </div>
            </div>
            <div className="footer mx-auto">
              <button
                type="button"
                className="btn btn-primary btn-join-modal p-0"
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
