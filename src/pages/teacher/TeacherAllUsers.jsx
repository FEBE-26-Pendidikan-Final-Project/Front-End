import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserComponent from "../../components/UserComponent";
import DataUsers from "../../components/teacher/DataUsers";
import TeacherMenu from "../../components/teacher/TeacherMenu";

function TeacherAllUsers() {
  const idAdmin = localStorage.getItem("id");
  const tokenAdmin = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const authadmin = localStorage.getItem("token");

  const header = {
    authadmin: authadmin,
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/teachlogin");
    }
  });

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
      .catch((error) => {});
  }, []);

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
          className="container my-2 d-flex justify-content-center"
          style={{
            width: "100vw",
            boxSizing: "border-box",
          }}
        >
          <div className="row mx-0 d-flex ">
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
