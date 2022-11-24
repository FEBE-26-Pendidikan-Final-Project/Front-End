import React from "react";

function TeacherComponent(props) {
  return (
    <div>
      <div className="card my-2" style={{ borderRadius: "20px", border: "0px", padding: "20px" }}>
        <div className="text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="" className="" width={"100px"} />
        </div>
        <div className="card-body text-center">
          <h5 className="">Teacher</h5>
          {/* <p className="">Your Point</p>
          <h4>{props.point}</h4> */}
        </div>
      </div>
    </div>
  );
}

export default TeacherComponent;
