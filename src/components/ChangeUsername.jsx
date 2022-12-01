import React from "react";

function ChangeUsername() {
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
              //   value={username}
              //   onChange={handleUsername}
            />
          </div>
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
            <button
              className="btn btn-primary"
              // onClick={changeData}
            >
              Save
            </button>
          </div>
          <button
            className="btn btn-outline-danger d-flex ms-auto mt-3 "
            // onClick={deleteAcc}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeUsername;
