import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "./components/Presentation";
import ProgettiSection from "./components/Projects";
import ProjectDetails from "./components/ProjectDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/progetto/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
