import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import PortfolioPage from "./pages/PortfolioPage";
// import ProfileCard from "./pages/ProfileCard";
import PreviewPage from "./pages/PreviewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/create" element={<FormPage />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
        {/* <Route path="/preview/:id" element={<ProfileCard />} /> */}
        <Route path="/new-employee" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
