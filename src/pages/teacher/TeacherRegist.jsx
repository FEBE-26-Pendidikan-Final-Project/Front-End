import "../../css/teachregist.css";
import React, { useState } from "react";
import iconUsername from "../../assets/icon/teachuser.svg";
import iconPassword from "../../assets/icon/teachlock.svg";
import iconEmail from "../../assets/icon/teachemail.svg";
import circleTeach1 from "../../assets/icon/circleteach1.svg";
import circleTeach2 from "../../assets/icon/circleteach2.svg";
import imageRegister from "../../assets/img/registpict.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function TeacherRegist() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [point, setPoint] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const clickRegist = (e) => {
    const data = {
      nama: username,
      email: email,
      password: password,
    };
    axios
      .post(
        "https://back-end-production-a765.up.railway.app/Admin/register",
        data
      )
      .then((result) => {
        if (result) {
          if (result.data) {
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            swal(
              "Success!",
              "your account has been successfully created.",
              "success",
              {
                timer: 3000,
              }
            );
            navigate("/teachlogin");
            console.log(result);
          }
        }
      })
      .catch((e) => {
        console.log(e);
        if (!username) {
          swal("Error!", "username tidak boleh kosong", "error", {
            timer: 3000,
          });
        } else if (!email) {
          swal("Error!", "email tidak boleh kosong", "error", {
            timer: 3000,
          });
        } else if (password !== confirmPassword) {
          swal("Error!", "password tidak cocok", "error", {
            timer: 3000,
          });
        } else if (password.length < 6) {
          swal("Error!", "password harus lebih dari 6 karakter", "error", {
            timer: 3000,
          });
        } else if (e.response.data.message == "Email Sudah digunakan !") {
          swal("Error!", "email sudah digunakan", "error", {
            timer: 3000,
          });
        } else {
        }
      });
  };

  // const handleApi = async (e) => {
  //   let res = await axios.get(
  //     "https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users"
  //   );
  //   let data = await res.data;

  //   const ambilData = () => {
  //     const result = [];
  //     for (let i = 0; i < data.length; i++) {
  //       if (data[i].email == email) {
  //         result.push(data[i]);
  //       }
  //     }

  //     if (result < 1) {
  //       if (
  //         username == "" ||
  //         email == "" ||
  //         password == "" ||
  //         confirmPassword == ""
  //       ) {
  //         swal("Error!", "data must be filled.", "warning", {
  //           timer: 4000,
  //         })
  //       } else if (password != confirmPassword) {
  //         swal("Error!", "password is incorrect.", "error", {
  //           timer: 4000,
  //         })
  //       } else {
  //         axios
  //           .post("https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users", {
  //             name: username,
  //             email: email,
  //             password: password,
  //             confirm: confirmPassword,
  //             point: 0,
  //           })
  //           .then((result) => {
  //             swal("Success!", "your account has been successfully created.", "success", {
  //               timer: 3000,
  //             }),
  //               navigate("/");
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           });
  //       }
  //     } else {
  //       swal("Important Message!", "email already registered.", "warning", {
  //           timer: 4000,
  //         })
  //     }
  //   };
  //   ambilData();
  // };

  return (
    <>
      <div className="wrapper d-flex justify-content-center position-relative">
        <div className="box d-flex">
          <div className="box-left-regist">
            <div className="logo-teach text-center">
              Suka<span className="fw-bold">Baca</span>
            </div>
            <h5 className="text-join">Join Us!</h5>
            <p className="text-create">Create your account</p>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <img src={iconUsername} alt="" />
              </span>
              <input
                value={username}
                onChange={handleUsername}
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="username"
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <img src={iconEmail} alt="" />
              </span>
              <input
                value={email}
                onChange={handleEmail}
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="email"
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <img src={iconPassword} alt="" />
              </span>
              <input
                value={password}
                onChange={handlePassword}
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="password"
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <img src={iconPassword} alt="" />
              </span>
              <input
                value={confirmPassword}
                onChange={handleConfirmPassword}
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="confirm-password"
                required
              />
            </div>
            <div className="button-register">
              <button
                onClick={clickRegist}
                type="button"
                className="btn btn-primary btn-teachreg p-0"
                id="register"
              >
                Register
              </button>
            </div>
            <p className="punya-akun-teach text-center">
              already have an account?
              <Link to={"/teachlogin"} className="daftar">
                {" "}
                Sign in
              </Link>
            </p>
          </div>
          <div className="box-right-teachreg position-relative">
            <div className="bulet1-regist position-absolute">
              <img src={circleTeach1} alt="" />
            </div>
            <div className="bulet2-regist position-absolute">
              <img src={circleTeach2} alt="" />
            </div>
            <div className="bulet3-regist position-absolute">
              <img src={circleTeach1} alt="" />
            </div>
            <div className="foto-regist text-center">
              <img src={imageRegister} alt="" />
            </div>
            <div className="regist-title text-center">
              Tingkatkan Literasi Mu
            </div>
            <p className="regist-text position-absolute text-center">
              Dengan Membaca maka kita akan kita akan berkhayal tentang dunia
              akhirat
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherRegist;
