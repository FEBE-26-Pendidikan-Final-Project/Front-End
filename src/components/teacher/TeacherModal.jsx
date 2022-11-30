import axios from "axios";
import React, { useState } from "react";
import "../../css/teachermodal.css";

function TeacherModal() {
  const [kelas, setKelas] = useState("");
  const [desc, setDesc] = useState("");

  const header = {
    authadmin: localStorage.getItem("token"),
  };
  const createClass = () => {
    axios
      .post(
        `https://back-end-production-a765.up.railway.app/Kelas/`,
        {
          nama: kelas,
          ket: desc,
          admin: localStorage.getItem("id"),
        },
        {
          headers: header,
        }
      )
      .then(function (response) {
        console.log(response);
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <button type="button" class="btn btn-primary btn-create-class" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Create Class
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content modal-content-teacher">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center mt-3 position-relative">
              <p className="text-light text-name mt-3">Class Name</p>
              <div className="group-input">
                <input
                  type="text"
                  class="text-center col-md-8 input-code input-name"
                  required
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={kelas}
                  onChange={(e) => setKelas(e.target.value)}
                />
              </div>
              <p className="text-light text-desc mt-3">Class Desc</p>
              <div className="group-input">
                <textarea
                  name=""
                  id=""
                  className="col-md-8"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div class="footer mx-auto">
              <button
                data-bs-dismiss="modal"
                type="button"
                class="btn btn-primary btn-join-modal p-0"
                onClick={() => createClass()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherModal;
