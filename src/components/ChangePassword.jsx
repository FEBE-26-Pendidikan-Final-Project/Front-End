import React from "react";

function ChangePassword() {
  return (
    <div>
      <div className="card my-2" style={{ borderRadius: "20px", border: "0px", padding: "20px" }}>
        <div className="card-body">
          <h5 className="">Change Password</h5>
          <p className="">Change your password right here</p>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Change Password" />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
