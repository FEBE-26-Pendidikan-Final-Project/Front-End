import "../css/changedata.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function ChangePassword() {
  const navigate = useNavigate();
  const idUser = localStorage.getItem("id");
  const tokenUser = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [changePw, setChangePw] = useState(false);
  const [changeUsername, setChangeUsername] = useState(false);
  // const [email, setEmail] = useState("");

  if (tokenUser === null) {
    navigate("/");
  }

  const handleChangePw = () => {
    setChangePw(true);
  };

  const handleChangeUsername = () => {
    setChangePw(false);
  };

  console.log(changePw);

  const header = {
    authuser: localStorage.getItem("token"),
  };

  const deleteAcc = () => {
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
            `https://back-end-production-a765.up.railway.app/User/${idUser}`,
            {
              headers: header,
            }
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        swal("account deleted successfully.", {
          icon: "success",
        }),
          localStorage.removeItem("id");
        localStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const changeData = () => {
    if (tokenUser === null) {
      navigate("/");
    } else if (username == "" || password == "") {
      swal("Error!", "username or password must be filled.", "warning", {
        timer: 4000,
      });
    } else {
      axios
        .put(
          `https://back-end-production-a765.up.railway.app/user/${idUser}`,
          {
            nama: username,
            password: password,
            newPassword: newpassword,
          },
          {
            headers: header,
          }
        )
        .then((result) => {
          console.log(result);
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
        .catch((error) => {
          console.log(error);
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
                  id="exampleFormControlInput1"
                  placeholder="New Password"
                  value={newpassword}
                  onChange={handleNewPassword}
                />
              </div>
            </>
          )}

          <div className="d-grid">
            {!changePw && (
              <button className="btn btn-primary" onClick={changeData}>
                Save Username
              </button>
            )}
            {changePw && (
              <button className="btn btn-primary" onClick={changeData}>
                Save New Password
              </button>
            )}
          </div>
          <div className="d-flex">
            <button
              className="btn btn-outline-danger d-flex mt-3 me-3 ms-auto "
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

export default ChangePassword;
