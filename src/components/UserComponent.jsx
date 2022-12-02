import axios from "axios";

import React, { useEffect, useState } from "react";

function UserComponent({ username, email }) {
  const idUser = localStorage.getItem("id");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let dataSkor = [];

  function totalSkor(arr) {
    let sum = 0;
    for (let a of arr) {
      sum += a;
    }
    return sum;
  }

  useEffect(() => {
    axios
      .get(
        `https://back-end-production-a765.up.railway.app/Nilai/user/${idUser}`
      )
      .then((res) => {
        setData(res.data.doc);
        setIsLoading(false);
      });
  }, []);

  data.map((el) => {
    return dataSkor.push(parseInt(el.skor));
  });

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
          <h5 className="">{username}</h5>
          <p className="">{totalSkor(dataSkor)}</p>
          <h6>{email}</h6>
        </div>
      </div>
    </div>
  );
}

export default UserComponent;
