import '../../css/teacherhome.css'
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Class from "../../components/Class";
import TeacherMenu from '../../components/teacher/TeacherMenu';

function TeacherHome() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("idUser") === null) {
  //     navigate("/");
  //   }


  // });
  return (
    <>
      <TeacherMenu />
      <div className="container">
        <div className="row justify-content-between my-2">
          <div className="col-lg-3">
            <form className="d-flex" role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" id="search" />
              <button className="btn teach-search" type="submit" id="btn-search">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="col-lg-2 my-2 d-grid">
            <button type="button" className="btn btn-create" id="btn-join">
              Create Class
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <Class />
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherHome