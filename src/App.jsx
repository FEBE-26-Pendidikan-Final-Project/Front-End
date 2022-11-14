import { Route, Routes } from "react-router-dom";
import "./App.css";
import Quiz from "./pages/Quiz";
import TextQuiz from "./pages/TextQuiz";

function App() {
  return (
    <Routes>
      <Route path="/text-quiz" element={<TextQuiz />} />
      <Route path="/quiz/:id" element={<Quiz />} />
    </Routes>
  );
}

export default App;
