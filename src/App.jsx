import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";
import Register from "./pages/Register";
import TextQuiz from "./pages/TextQuiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/text-quiz/:userId" element={<TextQuiz />} />
      <Route path="/quiz/:userId/:id" element={<Quiz />} />
      <Route path="/score/:userId" element={<Score />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
