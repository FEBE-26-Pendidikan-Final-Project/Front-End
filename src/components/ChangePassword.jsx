import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("idUser");
  const [password, setPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const changePass = () => {
      if (userId === null) {
        navigate("/");
      }else if(password == ""){
        swal("Error!", "Password Tidak Boleh Kosong!", "error", {
          timer: 1000,
        })
      }else {
        axios.put(`https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users/${userId}`, {
          password:password,
          confirm:password,
        }) .then((result) => {
          swal("Good job!", "Password Berhasil Diubah!", "success", {
            timer: 1000,
          })
        },setPassword(""))
        .catch((error) => {
          console.log(error);
        });
      }
    }
  

  return (
    <div>
      <div className="card my-2" style={{ borderRadius: "20px", border: "0px", padding: "20px" }}>
        <div className="card-body">
          <h5 className="">Change Password</h5>
          <p className="">Change your password right here</p>
          <div className="mb-3">
            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Change Password" value={password}
                onChange={handlePassword}/>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" onClick={changePass}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;