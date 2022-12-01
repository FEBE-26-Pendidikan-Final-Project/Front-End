import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LiterationList from "../components/LiterationList";
import Menu from "../components/Menu";
import TeacherMenu from "../components/teacher/TeacherMenu";
import "../css/text-quiz.css";
function Literation(props) {
  const idClass = useParams();

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [kelas, setKelas] = useState([]);
  const [data1, setData1] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [namaKelas, setNamaKelas] = useState("");
  const [desc, setDesc] = useState("");

  // console.log(idClass.id);
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  });
  // useEffect(() => {
  //   axios.get("https://634c0ee3317dc96a30906a1a.mockapi.io//literation").then((res) => {
  //     setData(res.data);
  //     setIsLoading(false);
  //   });
  // }, []);
  useEffect(() => {
    axios.get(`https://back-end-production-a765.up.railway.app/quiz/kelas/${idClass.id}`).then((res) => {
      setData(res.data.doc);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    axios.get(`https://back-end-production-a765.up.railway.app/kelas/${idClass.id}`).then((res) => {
      setKelas(res.data.doc);
      setIsLoading(false);
    });
  }, []);

  // console.log(kelas);
  const addQuiz = (idClass) => {
    navigate(`/teacher/quiz/${idClass}`);
  };

  const deleteClass = (idClass) => {
    const header = {
      authadmin: localStorage.getItem("token"),
    };
    axios
      .delete(`https://back-end-production-a765.up.railway.app/kelas/${idClass}`, {
        headers: header,
      })
      .then(function (response) {
        console.log(response);
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateClass = () => {
    const header = {
      authadmin: localStorage.getItem("token"),
    };
    axios
      .put(
        `https://back-end-production-a765.up.railway.app/Kelas/${idClass.id}`,
        {
          nama: namaKelas,
          ket: desc,
        },
        {
          headers: header,
        }
      )
      .then(function (response) {
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const leaveClass = (id) => {
    const header = {
      authUser: localStorage.getItem("token"),
    };
    axios
      .delete(`https://back-end-production-a765.up.railway.app/kelasTaken/${id}`, {
        headers: header,
      })
      .then(function (response) {
        // console.log(response);
        navigate("/home");
      })
      .then(function (error) {
        console.log(error);
      });
  };
  if (localStorage.getItem("role") === "teacher") {
    return (
      <div>
        <TeacherMenu />

        <div className="container mt-5">
          <div className="d-grid">
            <button className="bg-primary btn mb-3" style={{ color: "#fff" }} onClick={() => addQuiz(idClass.id)}>
              <i className="bi bi-plus"></i> Add Quiz
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn mb-3 btn-success mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="bi bi-pencil-fill"></i> Update Class
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content modal-content-teacher">
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body text-center mt-3 position-relative">
                    <p className="text-light text-name mt-3">Class Name</p>
                    <div className="group-input">
                      <input
                        type="text"
                        className="text-center col-md-8 input-code input-name"
                        required
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={namaKelas}
                        onChange={(e) => setNamaKelas(e.target.value)}
                      />
                    </div>
                    <p className="text-light text-desc mt-3">Class Desc</p>
                    <div className="group-input">
                      <textarea
                        name=""
                        id=""
                        className="col-md-8"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="footer mx-auto">
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      className="btn btn-primary btn-join-modal p-0"
                      onClick={() => updateClass()}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn mb-3 btn-danger mx-2" onClick={() => deleteClass(idClass.id)}>
              <i className="bi bi-trash-fill"></i> Delete Class
            </button>
          </div>
          <div className="container-fluid py-3 px-3 shadow-sm" style={{ backgroundColor: "#fff", borderRadius: "20px" }}>
            <div
              className="container"
              style={{ opacity: "0.5", height: "100px", borderRadius: "20px", backgroundColor: "#14c38e" }}
            ></div>
            <div className="text-center h4 mt-4">{kelas.nama}</div>
            <p className="text-center">{kelas.ket}</p>
            <p className="text-center">
              <b>{kelas._id}</b>
            </p>
          </div>
          <div className="container mt-3" id="literation-list">
            {isLoading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              data.map((item, index) => {
                return (
                  <div key={index}>
                    <LiterationList
                      id={item._id}
                      title={item.nama}
                      kelas={item.kelas}
                      bacaan={item.bacaan}
                      question={item.soal.question}
                      answer={item.soal.answer}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <div className="d-grid">
          <button className="bg-danger btn mb-3" style={{ color: "#fff" }} onClick={() => leaveClass(idClass.classTaken)}>
            <i className="bi bi-box-arrow-in-down-left"></i> Leave Class
          </button>
        </div>
        <div className="container-fluid py-3 px-3 shadow-sm" style={{ backgroundColor: "#fff", borderRadius: "20px" }}>
          <div className="container bg-primary" style={{ opacity: "0.5", height: "100px", borderRadius: "20px" }}></div>
          <div className="text-center h4 mt-4">{kelas.nama}</div>
          <p className="text-center">Literasi bacaan tengtang alam</p>
        </div>
        <div className="container mt-3" id="literation-list">
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            // (console.log("Hello"), console.log(data))
            data.map((item, index) => {
              return (
                <div key={index}>
                  <LiterationList id={item._id} title={item.nama} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Literation;
