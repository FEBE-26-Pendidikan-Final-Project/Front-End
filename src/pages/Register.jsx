import "../css/register.css";
import React, { useState } from "react";
import iconUsername from "../assets/img/userlogin.svg";
import iconEmail from "../assets/img/email_icon.svg";
import iconPassword from "../assets/img/lock.svg";
import buletan1 from "../assets/img/buletan1.png";
import buletan2 from "../assets/img/buletan2.png";
import buletan3 from "../assets/img/buletan3.png";
import imageRegister from "../assets/img/registpict.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "bootstrap";

function Register() {
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

  const handleApi = async (e) => {
    let res = await axios.get(
      "https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users"
    );
    let data = await res.data;

    const ambilData = () => {
      const result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == username) {
          result.push(data[i]);
        }
      }

      if (result < 1) {
        if (
          username == "" ||
          email == "" ||
          password == "" ||
          confirmPassword == ""
        ) {
          swal("Error!", "Data Harus Terisi!", "error", {
            timer: 1000,
          })
        } else if (password != confirmPassword) {
          swal("Error!", "Password Tidak Cocok", "error", {
            timer: 1000,
          })
        } else {
          axios
            .post("https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users", {
              name: username,
              email: email,
              password: password,
              confirm: confirmPassword,
              point: 0,
            })
            .then((result) => {
              swal("Good job!", "Akun Berhasil Dibuat!", "success", {
                timer: 1000,
              }),
                navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        swal("Error!", "Data Sudah Tersedia!", "error", {
          timer: 1000,
        })
      }
    };
    ambilData();
  };

  return (
    <>
      <div className="wrapper d-flex justify-content-center position-relative">
        <div className="box d-flex">
          <div className="box-left-regist">
            <div className="logo text-center">
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
                onClick={(e) => handleApi(e)}
                type="button"
                className="btn btn-primary btn-regist p-0"
                id="register"
              >
                Register
              </button>
            </div>
            <p className="punya-akun text-center">
              already have an account?
              <Link to={"/"} className="daftar">
                {" "}
                Sign in
              </Link>
            </p>
          </div>
          <div className="box-right-regist position-relative">
            <div className="bulet1-regist position-absolute">
              <img src={buletan1} alt="" />
            </div>
            <div className="bulet2-regist position-absolute">
              <img src={buletan2} alt="" />
            </div>
            <div className="bulet3-regist position-absolute">
              <img src={buletan3} alt="" />
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

export default Register;
