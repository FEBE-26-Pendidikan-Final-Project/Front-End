import React, { useEffect, useState } from "react";
import ChangePassword from "../components/ChangePassword";
import Menu from "../components/Menu";
import UserComponent from "../components/UserComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Account() {
  const userId = localStorage.getItem("idUser");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("idUser") === null) {
      navigate("/");
    }
  });
  if (localStorage.getItem("idUser") !== null) {
    useEffect(() => {
      axios.get(`https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users/${userId}`).then((res) => {
        setData(res.data);
        setIsLoading(false);
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
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <UserComponent username={data.name} point={data.point} />
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
