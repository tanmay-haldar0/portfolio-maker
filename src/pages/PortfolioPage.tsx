import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { loadFromLocal } from "../utils/storage";
import TemplateA from "../templates/TemplateA";
import TemplateB from "../templates/TemplateB";
// import html2pdf from "html2pdf.js";


export default function PortfolioPage() {
  const { id } = useParams();
  const data = loadFromLocal(`portfolio_${id}`);
  const selectedTemplate = localStorage.getItem("selected_template");
  const portfolioRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // 🆕 for navigation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return <div className="text-white p-8">Portfolio not found.</div>;



  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "template-a":
        return <TemplateA data={data} />;
      case "template-b":
        return <TemplateB data={data} />;
      default:
        return <TemplateA data={data} />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4 text-white flex flex-col items-center relative">

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm shadow"
      >
        ← Back
      </button>

      {/* 📄 Portfolio Preview */}
      <div ref={portfolioRef} className="w-full flex justify-center">

        {renderTemplate()}

      </div>
    </div>
  );
}

