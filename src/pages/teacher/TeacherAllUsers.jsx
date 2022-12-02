import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserComponent from "../../components/UserComponent";
import DataUsers from "../../components/teacher/DataUsers";
import TeacherMenu from "../../components/teacher/TeacherMenu";

function TeacherAllUsers() {
  const idUser = localStorage.getItem("id");
  const tokenUser = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const authAxios = axios.create({
  //   baseURL: "https://back-end-production-a765.up.railway.app/User/",
  //   headers: {
  //     authuser: `${tokenUser}`,
  //   },
  // });

  const authadmin =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdlMWNhNzZiZDFmZjA4MjhlZmQxMzciLCJpYXQiOjE2Njk4MjYwNzZ9.Sv2nO1KMR3U5laG2uVJSOUxa148YQK4Lv22ois9AYQM";

  const header = {
    authadmin: authadmin,
  };

  //   useEffect(() => {
  //     if (localStorage.getItem("token") === null) {
  //       navigate("/");
  //     }
  //   });

  useEffect(() => {
    axios
      .get(
        "https://back-end-production-a765.up.railway.app/Admin/User/getAllUser",
        {
          headers: header,
        }
      )
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <TeacherMenu />
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div
          className="container my-2 d-flex ms-5"
          style={{ width: "100vw", boxSizing: "border-box" }}
        >
          <div className="row mx-0 d-flex">
            <div className="col-md-12 col-sm-12 d-flex flex-wrap">
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <DataUsers
                      id={item._id}
                      nama={item.nama}
                      email={item.email}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherAllUsers;
