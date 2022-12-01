import React, { useEffect, useState } from "react";
import ChangePassword from "../components/ChangePassword";
import Menu from "../components/Menu";
import UserComponent from "../components/UserComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChangeUsername from "../components/ChangeUsername";

function Account() {
  const idUser = localStorage.getItem("id");
  const tokenUser = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // const authAxios = axios.create({
  //   baseURL: "https://back-end-production-a765.up.railway.app/User/",
  //   headers: {
  //     authuser: `${tokenUser}`,
  //   },
  // });

  const header = {
    authuser: localStorage.getItem("token"),
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  });
  if (localStorage.getItem("token") !== null) {
    useEffect(() => {
      axios
        .get(`https://back-end-production-a765.up.railway.app/User/${idUser}`, {
          headers: header,
        })
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
      <Menu />
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
              <UserComponent username={data.nama} email={data.email} />
            </div>
            <div className="col-md-8">
              <ChangePassword />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
