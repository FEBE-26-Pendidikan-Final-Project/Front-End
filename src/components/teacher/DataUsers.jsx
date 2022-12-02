import axios from "axios";
import React, { useEffect, useState } from "react";

function DataUsers({ id, nama, email }) {
  const [data, setData] = useState("");
  const authadmin = localStorage.getItem("token");
  const [updateName, setUpdateName] = useState("");

  const idUser = id;

  // console.log(idUsers);

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

  const handleUpdateUser = () => {
    axios
      .put(
        `https://back-end-production-a765.up.railway.app/Admin/updateUser/${idUser}`,
        {
          nama: updateName,
        },
        {
          headers: header,
        }
      )
      .then((result) => {
        swal("Success!", "data has been changed successfully.", "success", {
          timer: 3000,
        }),
          location.reload();
      })
      .catch((error) => {
        swal("Error!", "account failed to changed", "error", {
          timer: 3000,
        });
      });
  };

  // const handleDeleteUser = () => {
  //   axios
  //     .delete(
  //       `https://back-end-production-a765.up.railway.app/Admin/deleteUser/${idUsers}`,
  //       {
  //         headers: header,
  //       }
  //     )
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
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
          <div className="d-flex justify-content-center mb-0 bottom-0">
            <button
              type="button"
              className="btn btn-outline-success mt-3 me-2 w-50"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Edit
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content modal-content-teacher">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center mt-3 position-relative">
                    <p className="text-light text-name ">Name</p>
                    <div className="group-input">
                      <input
                        type="text"
                        className="text-center col-md-8 input-code input-name"
                        required
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={updateName}
                        onChange={(e) => setUpdateName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="footer mx-auto">
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      className="btn btn-primary btn-join-modal p-0"
                      onClick={() => handleUpdateUser()}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-outline-danger mt-3 w-50"
              onClick={handleDeleteUser}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataUsers;
