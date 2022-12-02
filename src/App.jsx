import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";
import Register from "./pages/Register";
import TextQuiz from "./pages/TextQuiz";
import Home from "./pages/Home";
import Literation from "./pages/Literation";
import Account from "./pages/Account";
import TeacherLogin from "./pages/teacher/TeacherLogin";
import TeacherRegist from "./pages/teacher/TeacherRegist";
import TeacherAccount from "./pages/teacher/TeacherAccount";
import TeacherQuiz from "./pages/teacher/TeacherQuiz";
import QuizList from "./pages/teacher/QuizList";
import TeacherQuizUpdate from "./pages/teacher/TeacherQuizUpdate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/literations/:id" element={<Literation />} />
      <Route path="/account" element={<Account />} />
      <Route path="/text-quiz/:id" element={<TextQuiz />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/score" element={<Score />} />
      <Route path="/register" element={<Register />} />
      <Route path="/teachlogin" element={<TeacherLogin />} />
      <Route path="/teachregist" element={<TeacherRegist />} />
      <Route path="/teachaccount" element={<TeacherAccount />} />
      <Route path="/teacher/quizlist" element={<QuizList />} />
      <Route path="/teacher/quiz/:id" element={<TeacherQuiz />} />
      <Route path="/teacher/quizUpdate/:id" element={<TeacherQuizUpdate />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
