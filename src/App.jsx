import { Route, Routes } from "react-router-dom";
import "./App.css";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";
import TextQuiz from "./pages/TextQuiz";

function App() {
  return (
    <Routes>
      <Route path="/text-quiz" element={<TextQuiz />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/score" element={<Score />} />
    </Routes>
  );
}

export default App;
