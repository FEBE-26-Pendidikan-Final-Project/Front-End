import React, { useEffect, useState } from "react";
import ChangePassword from "../../components/ChangePassword";
import Menu from "../../components/Menu";
import UserComponent from "../../components/UserComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TeacherMenu from "../../components/teacher/TeacherMenu";
import TeacherComponent from "../../components/teacher/TeacherComponent";
import TeacherChanges from "../../components/teacher/TeacherChanges";

function TeacherAccount() {
  const idAdmin = localStorage.getItem("id");
  const tokenAdmin = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const header = {
    authadmin: localStorage.getItem("token"),
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  });
  if (localStorage.getItem("token") !== null) {
    useEffect(() => {
      axios
        .get(
          `https://back-end-production-a765.up.railway.app/Admin/${idAdmin}`,
          { headers: header }
        )
        .then((result) => {
          console.log(result.data.message);
          setIsLoading(false);
          setData(result.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  }

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
        <div className="container my-2 mb-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <TeacherComponent username={data.nama} email={data.email} />
            </div>
            <div className="col-md-8">
              <TeacherChanges />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherAccount;
