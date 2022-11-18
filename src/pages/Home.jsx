import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Class from "../components/Class";
import Menu from "../components/Menu";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("idUser") === null) {
      navigate("/");
    }
  });
  return (
    <>
      <Menu />
      <div className="container">
        <div className="row justify-content-between my-2">
          <div className="col-lg-3">
            <form className="d-flex" role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" id="search" />
              <button className="btn" type="submit" id="btn-search">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="col-lg-2 my-2 d-grid">
            <button type="button" className="btn" id="btn-join">
              Join Class
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

export default Home;
