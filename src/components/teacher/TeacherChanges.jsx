import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function TeacherChanges() {
  const navigate = useNavigate();
  const adminId = localStorage.getItem("id");
  const tokenAdmin = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [changePw, setChangePw] = useState(false);

  const header = {
    authadmin: localStorage.getItem("token"),
  };

  const handleChangePw = () => {
    setChangePw(true);
  };

  const handleChangeUsername = () => {
    setChangePw(false);
  };

  const deleteAcc = () => {
    swal({
      title: "Delete Account",
      text: "Are you sure want to delete this account?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        axios
          .delete(
            `https://back-end-production-a765.up.railway.app/Admin/deleteAdmin/${adminId}`,
            {
              headers: header,
            }
          )
          .then(res => {
            console.log(res);
            swal("account deleted successfully.", {
              icon: "success",
            }),
              localStorage.removeItem("id");
            localStorage.removeItem("token");
            navigate("/teachlogin");
          })
          .catch(err => {});
      }
    });
  };

  const handleUsername = e => {
    setUsername(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleNewPassword = e => {
    setNewPassword(e.target.value);
  };

  const changeDataPassword = () => {
    if (tokenAdmin === null) {
      navigate("/");
    } else if (password == "") {
      swal("Error!", "password must be filled.", "warning", {
        timer: 4000,
      });
    } else {
      axios
        .put(
          `https://back-end-production-a765.up.railway.app/admin/${adminId}`,
          {
            password: password,
            newPassword: newpassword,
          },
          {
            headers: header,
          }
        )
        .then(result => {
          swal(
            "Success!",
            "password has been changed successfully.",
            "success",
            {
              timer: 3000,
            }
          ),
            navigate("/home"),
            setUsername(""),
            setPassword(""),
            setNewPassword("");
        })
        .catch(error => {
          if (
            error.response.data.message ==
            '"password" length must be at least 6 characters long'
          ) {
            swal(
              "Error!",
              "password length must be at least 6 characters long",
              "error",
              {
                timer: 3000,
              }
            );
          } else if (error.response.data.message == "Password tidak sesuai!") {
            swal("Error!", "your old password wrong!", "error", {
              timer: 3000,
            });
          } else if (
            error.response.data.message ==
            '"newPassword" is not allowed to be empty'
          ) {
            swal("Error!", "new password is not allowed to be empty", "error", {
              timer: 3000,
            });
          } else if (
            error.response.data.message ==
            '"password" is not allowed to be empty'
          ) {
            swal("Error!", "password is not allowed to be empty", "error", {
              timer: 3000,
            });
          } else if (
            error.response.data.message ==
            '"newPassword" length must be at least 6 characters long'
          ) {
            swal(
              "Error!",
              "new password length must be at least 6 characters long",
              "error",
              {
                timer: 3000,
              }
            );
          }
        });
    }
  };

  const changeDataUsername = () => {
    if (tokenAdmin === null) {
      navigate("/");
    } else if (username == "") {
      swal("Error!", "username or password must be filled.", "warning", {
        timer: 4000,
      });
    } else {
      axios
        .put(
          `https://back-end-production-a765.up.railway.app/admin/${adminId}`,
          {
            nama: username,
          },
          {
            headers: header,
          }
        )
        .then(result => {
          swal(
            "Success!",
            "Username has been changed successfully.",
            "success",
            {
              timer: 3000,
            }
          ),
            navigate("/home"),
            setUsername("");
        });
    }
  };

  return (
    <div>
      <div
        className="card my-2"
        style={{ borderRadius: "20px", border: "0px", padding: "20px" }}
      >
        <div className="card-body">
          <h5 className="text-center">Change Account Data</h5>
          {!changePw && (
            <>
              <p className="text-change pt-3">
                change your username right here
              </p>
              <div className="mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Change Username"
                  value={username}
                  onChange={handleUsername}
                />
              </div>
            </>
          )}
          {changePw && (
            <>
              <p className="text-change">old password</p>
              <div className="mb-3 col-md-6">
                <input
                  type="password"
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Old Password"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <p className="text-change">new password</p>
              <div className="mb-3 col-md-6">
                <input
                  type="password"
                  className="form-control "
                  id="exampleFormControlInput2"
                  placeholder="New Password"
                  value={newpassword}
                  onChange={handleNewPassword}
                />
              </div>
            </>
          )}

          <div className="d-grid">
            {!changePw && (
              <button className="btn btn-success" onClick={changeDataUsername}>
                Save Username
              </button>
            )}
            {changePw && (
              <button className="btn btn-success" onClick={changeDataPassword}>
                Save New Password
              </button>
            )}
          </div>
          <div className="d-flex">
            <button
              className="btn btn-outline-danger d-flex ms-auto me-3 mt-3 "
              onClick={deleteAcc}
            >
              Delete Account
            </button>
            {!changePw && (
              <>
                <button
                  className="btn btn-outline-success d-flex mt-3 "
                  onClick={handleChangePw}
                >
                  Change Password
                </button>
              </>
            )}
            {changePw && (
              <>
                <button
                  className="btn btn-outline-success d-flex mt-3 "
                  onClick={handleChangeUsername}
                >
                  Back
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherChanges;
