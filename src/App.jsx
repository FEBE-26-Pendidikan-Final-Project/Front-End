import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Register from "./pages/Register";
import TextQuiz from "./pages/TextQuiz";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Login/>} />
      <Route path="/text-quiz" element={<TextQuiz />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
}

export default App;
