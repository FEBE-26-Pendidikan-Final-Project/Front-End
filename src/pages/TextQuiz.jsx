import "../css/text-quiz.css";
import React, { useEffect } from "react";
import Menu from "../components/Menu";
import TextComponent from "../components/TextComponent";

function TextQuiz() {
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  });
  return (
    <div>
      <Menu />
      <TextComponent />
    </div>
  );
}

export default TextQuiz;
