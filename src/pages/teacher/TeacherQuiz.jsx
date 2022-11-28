import React from "react";
import TeacherMenu from "../../components/teacher/TeacherMenu";
import TeacherQuizComponent from "../../components/teacher/TeacherQuizComponent";
import "../../css/text-quiz.css";

function TeacherQuiz() {
  return (
    <div>
      <TeacherMenu />
      <TeacherQuizComponent />
    </div>
  );
}

export default TeacherQuiz;
