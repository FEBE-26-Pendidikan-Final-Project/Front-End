import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DataUsers({ id, nama, email }) {
  const [data, setData] = useState("");
  const authadmin = localStorage.getItem("token");

  const idUsers = useParams();
  const idUser = id;

  const header = {
    authadmin: authadmin,
  };

  const handleDeleteUser = () => {
    swal({
      title: "Delete Account",
      text: "Are you sure want to delete this account?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(
            `https://back-end-production-a765.up.railway.app/Admin/deleteUser/${idUser}`,
            {
              headers: header,
            }
          )
          .then((res) => {
            swal("account deleted successfully.", {
              icon: "success",
            }),
              location.reload();
          })
          .catch((error) => {
            swal("account failed to delete.", {
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div
      className="card ms-3 mt-3"
      style={{ borderRadius: "20px", height: "340px", width: "250px" }}
    >
      <div className="text-center mt-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
          alt=""
          className=""
          width={"100px"}
        />
      </div>
      <div className="card-body">
        <p
          className="title text-center fw-bold"
          style={{ color: "#334", fontSize: "13px" }}
        >
          {id}
        </p>
        <p className="title" style={{ color: "#334", fontSize: "14px" }}>
          Name : {nama}
        </p>
        <p className="title" style={{ color: "#334", fontSize: "14px" }}>
          Email : {email}
        </p>

        <button
          className="btn btn-outline-danger mt-3 w-100"
          onClick={handleDeleteUser}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DataUsers;
