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
import TeacherLogin from "./pages/TeacherLogin";
import TeacherRegist from "./pages/TeacherRegist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/literations" element={<Literation />} />
      <Route path="/account" element={<Account />} />
      <Route path="/text-quiz/:id" element={<TextQuiz />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/score" element={<Score />} />
      <Route path="/register" element={<Register />} />
      <Route path="/teachlogin" element={<TeacherLogin/>} />
      <Route path="/teachregist" element={<TeacherRegist/>} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
