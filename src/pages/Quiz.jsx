import React, { useEffect } from "react";
import Menu from "../components/Menu";
import QuizComponent from "../components/QuizComponent";

function Quiz() {
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  });
  return (
    <div>
      <Menu />
      <QuizComponent />
    </div>
  );
}

export default Quiz;
