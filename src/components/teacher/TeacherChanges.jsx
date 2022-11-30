import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function TeacherChanges() {
  const navigate = useNavigate();
  const adminId = localStorage.getItem("id");
  const tokenAdmin = localStorage.getItem("token");
  // const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  //   if (userId === null) {
  //     navigate("/");
  //   }

  const header = {
    authadmin: localStorage.getItem("token"),
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
            `https://back-end-production-a765.up.railway.app/Admin/${adminId}`,
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
        navigate("/teachlogin");
      }
    });
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const changeData = () => {
    if (tokenAdmin === null) {
      navigate("/");
    } else if (username == "") {
      swal("Error!", "password must be filled.", "warning", {
        timer: 4000,
      });
    } else {
      axios
        .put(
          `https://back-end-production-a765.up.railway.app/Admin/${adminId}`,
          {
            nama: username,
            email: email,
          },
          {
            headers: header,
          }
        )
        .then(
          (result) => {
            swal(
              "Success!",
              "password has been changed successfully.",
              "success",
              {
                timer: 3000,
              }
            ),
              navigate("/home");
          },
          setUsername(""),
          setEmail("")
        )
        .catch((error) => {
          console.log(error);
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
          <p className="text-change pt-3">change your username right here</p>
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
          <p className="text-change">change your email right here</p>
          <div className="mb-3 col-md-6">
            <input
              type="email"
              className="form-control "
              id="exampleFormControlInput1"
              placeholder="Change Email"
              value={email}
              onChange={handleEmail}
            />
          </div>{" "}
          {/* <p className="text-change">change your password right here</p>
          <div className="mb-3 col-md-6">
            <input
              type="password"
              className="form-control "
              id="exampleFormControlInput1"
              placeholder="Change Password"
              value={password}
              onChange={handlePassword}
            />
          </div> */}
          <div className="d-grid">
            <button className="btn btn-success" onClick={changeData}>
              Save
            </button>
          </div>
          <button
            className="btn btn-outline-danger d-flex ms-auto mt-3 "
            onClick={deleteAcc}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherChanges;
