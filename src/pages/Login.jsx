import "../css/login.css";
import buletan1 from "../assets/img/buletan1.png";
import buletan2 from "../assets/img/buletan2.png";
import buletan3 from "../assets/img/buletan3.png";
import imageLogin from "../assets/img/loginpict.png";
import iconUsername from "../assets/img/userlogin.svg";
import iconPassword from "../assets/img/lock.svg";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleGetData = async () => {
    let res = await axios.get(
      "https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users"
    );
    let data = await res.data;

    const ambilData = () => {
      const result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == username && data[i].password == password) {
          result.push(data[i]);
        }
      }

      if (result < 1) {
        alert("Gagal Masuk");
      } else {
        alert("Berhasil Masuk"),
        location.pathname = "/text-quiz"
      }
    };
    ambilData();
  };

  return (
    <>
      <div className="wrapper d-flex justify-content-center position-relative">
        <div className="box d-flex">
          <div className="box-left text-center position-relative">
            <div className="bulet1 position-absolute">
              <img src={buletan1} alt="" />
            </div>
            <div className="bulet2 position-absolute">
              <img src={buletan2} alt="" />
            </div>
            <div className="bulet3 position-absolute">
              <img src={buletan3} alt="" />
            </div>
            <img src={imageLogin} className="foto-login" alt="" />
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=target@email.com&subject=&body=">mail link</a>

            <div className="card-title">Tingkatkan Literasi Mu</div>
            <div className="card-text position-absolute">
              <p className="">
                Dengan Membaca maka kita akan kita akan berkhayal tentang dunia
                akhirat
              </p>
            </div>
          </div>
          <div className="box-right">
            <div className="logo text-center">
              Suka<span className="tebal">Baca</span>
            </div>
            <h5 className="text-sapa">Hello,Users!</h5>
            <p className="text-salam">welcome, please login to continue</p>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img src={iconUsername} alt="" />
              </span>
              <input
                value={username}
                onChange={handleUsername}
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="username"
                id="username"
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
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
                name="password"
                id="password"
                required
              />
            </div>
            <p className="text-forgot">Forgot Password?</p>
            <div className="button-login">
              <button
                onClick={handleGetData}
                type="button"
                className="btn btn-primary p-0 btn-login"
                id="login"
              >
                Login
              </button>
            </div>
            <p className="gapunya-akun text-center">
              Don’t have any account yet?
              <Link to={"/register"} className="daftar">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
