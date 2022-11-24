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
            <button type="button" className="btn" id="btn-join" data-bs-toggle="modal" data-bs-target="#joinClass">
              Join Class
            </button>
            <div className="modal fade" id="joinClass" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Join Class
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                          Please input token class
                        </label>
                        <input type="text" className="form-control" id="tokenclass" />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
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
