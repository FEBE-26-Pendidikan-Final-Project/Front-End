import "../css/login.css";
import buletan1 from "../assets/img/buletan1.png";
import buletan2 from "../assets/img/buletan2.png";
import buletan3 from "../assets/img/buletan3.png";
import imageLogin from "../assets/img/loginpict.png";
import iconUsername from "../assets/img/userlogin.svg";
import iconPassword from "../assets/img/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const clickLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("https://back-end-production-a765.up.railway.app/User/login", data)
      .then((result) => {
        swal("Success!", "login successfully.", "success", {
          timer: 1000,
        }),
          localStorage.setItem("token", result.data.token);
        localStorage.setItem("id", result.data.id);
        localStorage.setItem("role", "user");

        setRedirect(true);
      })
      .catch((err) => {
        if (!email) {
          swal("Error!", "email is incorrect.", "error", {
            timer: 1000,
          });
        } else if (!password) {
          swal("Error!", "password is incorrect.", "error", {
            timer: 1000,
          });
        } else {
          swal("Error!", "email or password is incorrect.", "error", {
            timer: 1000,
          });
        }
      });
  };

  return (
    <Fragment>
      {redirect && navigate("/home")}
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

            <div className="card-title">Tingkatkan Literasi Mu</div>
            <div className="card-text position-absolute">
              <p className="">
                Dengan Membaca maka kita akan kita akan berkhayal tentang dunia
                akhirat
              </p>
            </div>
          </div>
          <div className="box-right">
            <div className="logo">
              Suka<span className="tebal">Baca</span>
            </div>
            <h5 className="text-sapa">Hello, Users!</h5>
            <p className="text-salam">welcome, please login to continue</p>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img src={iconUsername} alt="" />
              </span>
              <input
                value={email}
                onChange={handleEmail}
                type="text"
                className="form-control"
                placeholder="Email"
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
            <div className="button-login">
              <button
                onClick={clickLogin}
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
    </Fragment>
  );
}

export default Login;
