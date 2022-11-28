import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LiterationList from "../components/LiterationList";
import Menu from "../components/Menu";
import TeacherMenu from "../components/teacher/TeacherMenu";
import "../css/text-quiz.css";

localStorage.setItem("role", "user");

function Literation() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("idUser") === null) {
      navigate("/");
    }
  });
  useEffect(() => {
    axios.get("https://634c0ee3317dc96a30906a1a.mockapi.io//literation").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  const addQuiz = () => {
    navigate("/teacher/quiz");
  };

  if (localStorage.getItem("role") === "teacher") {
    return (
      <div>
        <TeacherMenu />

        <div className="container mt-5">
          <div className="d-grid">
            <button className="btn mb-3" style={{ backgroundColor: "#14c38e", color: "#fff" }} onClick={addQuiz}>
              + Add Quiz
            </button>
          </div>
          <div className="container-fluid py-3 px-3 shadow-sm" style={{ backgroundColor: "#fff", borderRadius: "20px" }}>
            <div className="container bg-primary" style={{ opacity: "0.5", height: "100px", borderRadius: "20px" }}></div>
            <div className="text-center h4 mt-4">Ilmu Pengetahuan Alam</div>
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
              data.map((item, index) => {
                return (
                  <div key={index}>
                    <LiterationList id={item.id} title={item.title} />
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
        <div className="container-fluid py-3 px-3 shadow-sm" style={{ backgroundColor: "#fff", borderRadius: "20px" }}>
          <div className="container bg-primary" style={{ opacity: "0.5", height: "100px", borderRadius: "20px" }}></div>
          <div className="text-center h4 mt-4">Ilmu Pengetahuan Alam</div>
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
            data.map((item, index) => {
              return (
                <div key={index}>
                  <LiterationList id={item.id} title={item.title} />
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
