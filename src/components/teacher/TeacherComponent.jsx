import React from "react";

function TeacherComponent({ username, email }) {
  return (
    <div>
      <div
        className="card my-2"
        style={{ borderRadius: "20px", border: "0px", padding: "20px" }}
      >
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
            alt=""
            className=""
            width={"100px"}
          />
        </div>
        <div className="card-body text-center">
          <h6 className="">{username}</h6>
          <p className="">Your Email</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default TeacherComponent;
