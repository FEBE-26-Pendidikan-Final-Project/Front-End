import React, { useEffect, useState } from "react";
import ChangePassword from "../components/ChangePassword";
import Menu from "../components/Menu";
import UserComponent from "../components/UserComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Account() {
  const tokenUser = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  });
  if (localStorage.getItem("token") !== null) {
    useEffect(() => {
      axios
        .post(
          `https://back-end-production-a765.up.railway.app/User/register${tokenUser}`
        )
        .then((result) => {
          setData(result.data);
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
        <div className="container my-2 mb-5">
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
