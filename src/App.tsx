import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./containers/HomePage";
import SchedulerPage from "./containers/SchedulerPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scheduler" element={<SchedulerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
