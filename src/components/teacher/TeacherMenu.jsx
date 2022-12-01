import React from "react";
import "../../css/teacherhome.css";
import home from "../../assets/icon/teacherhome.png";
import account from "../../assets/icon/teacheraccount.png";
import logout from "../../assets/icon/logout.svg";
import { Link, useNavigate } from "react-router-dom";

function TeacherMenu() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("score");
    navigate("/teachlogin");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <button
            className="btn btn-transparant"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menu"
            aria-controls="offcanvasExample"
          >
            <h2>
              <i className="bi bi-list menu-teacher"></i>
            </h2>
          </button>
          <Link className="navbar-brand mx-auto text-logo" to={"/teachhome"}>
            Suka<span className="fw-bold">Baca</span>
          </Link>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="menu"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-logo" id="offcanvasExampleLabel">
            Suka<span className="fw-bold">Baca</span>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to={"/home"} className="nav-link">
                <img src={home} alt="" className="mx-2" />
                <span className="mx-3">Home Teacher</span>
              </Link>
            </li>
            <li className="list-group-item">
              <Link to={"/account"} className="nav-link">
                <img src={account} alt="" className="mx-2" />
                <span className="mx-3">Account</span>
              </Link>
            </li>
            <li className="list-group-item">
              <a
                onClick={handleLogout}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                <img src={logout} alt="" className="mx-2" />
                <span className="mx-3">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeacherMenu;
