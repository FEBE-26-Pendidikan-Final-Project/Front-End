import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


function TeacherChanges() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("idUser");
  const [password, setPassword] = useState("");
  
//   if (userId === null) {
//     navigate("/");
//   }

  const deleteAcc = () => {
    swal({
      title: "Delete Account",
      text: "Are you sure want to delete this account?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users/${userId}`)
        .then(res => {}).catch(err => console.log("error"))
        swal("account deleted successfully.", {
          icon: "success",
        }),
        localStorage.removeItem("idUser");
        navigate("/")
      }
    });
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const changePass = () => {
      if (userId === null) {
        navigate("/");
      }else if(password == ""){
        swal("Error!", "password must be filled.", "warning", {
          timer: 4000,
        })
      }else {
        axios.put(`https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users/${userId}`, {
          password:password,
          confirm:password,
        }) .then((result) => {
          swal("Success!", "password has been changed successfully.", "success", {
            timer: 3000,
          }),
          navigate("/home")
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
            <button className="btn btn-outline-danger d-flex ms-auto mt-3 " onClick={deleteAcc}>Delete Account</button>      
        </div>
      </div>
    </div>
  );
}

export default TeacherChanges;