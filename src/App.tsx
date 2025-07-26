import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProfileCard from "./pages/ProfileCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<FormPage />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
        <Route path="/preview/:id" element={<ProfileCard />} />
      </Routes>
    </Router>
  );
}

export default App;
