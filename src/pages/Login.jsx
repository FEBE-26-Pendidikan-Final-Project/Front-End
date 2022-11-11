import '../css/login.css'
import buletan1 from '../assets/img/buletan1.png'
import buletan2 from '../assets/img/buletan2.png'
import buletan3 from '../assets/img/buletan3.png'
import imageLogin from '../assets/img/loginpict.png'
import iconUsername from '../assets/img/userlogin.svg'
import iconPassword from '../assets/img/lock.svg'

function Login() {
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
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </span>
              <input
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
              <button type="button" className="btn btn-primary p-0" id="login">
                Login
              </button>
            </div>
            <p className="gapunya-akun text-center">
              Don’t have any account yet?
              <a href="regist.html" className="daftar">
                {" "}
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
