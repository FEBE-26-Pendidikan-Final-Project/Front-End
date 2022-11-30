import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Class from "../components/Class";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import JoinClass from "../components/JoinClass";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [classTaken, setClassTaken] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idKelas, setIdKelas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  });

  // useEffect(() => {
  //   axios
  //     .get("https://back-end-production-a765.up.railway.app/kelas")
  //     .then(function (response) {
  //       setData(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://back-end-production-a765.up.railway.app/kelastaken/user/6380a7f0a69b7c4ac8dc1877")
      .then(function (response) {
        setClassTaken(response.data.doc);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
            <JoinClass />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {classTaken.map((item, index) => (
              // console.log(item);
              <div className="col-lg-3 mt-3" key={item.kelas._id}>
                <Class className={item.kelas.nama} idClass={item.kelas._id} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
