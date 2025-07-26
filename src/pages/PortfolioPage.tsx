import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { loadFromLocal } from "../utils/storage";
import TemplateA from "../templates/TemplateA";
import TemplateB from "../templates/TemplateB";
import TemplateC from "../templates/TemplateC";
import TemplateD from "../templates/TemplateD";
// import html2pdf from "html2pdf.js";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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

  const handleDownloadPDF = async () => {
    const input = document.getElementById("pdf-content");
    if (!input) return;

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });

    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);
    pdf.save("portfolio_resume.pdf");
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "template-a":
        return <TemplateA data={data} />;
      case "template-b":
        return <TemplateB data={data} />;
      case "template-c":
        return <TemplateC data={data} />;
      case "template-d":
        return <TemplateD data={data} />;
      default:
        return <TemplateA data={data} />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4 text-white flex flex-col items-center relative">
      
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/create")}
        className="absolute top-4 left-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm shadow"
      >
        ← Edit Portfolio
      </button>

      {/* 📄 Download Button */}
      <div className="mb-2 mt-8">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          📄 Download as PDF
        </button>
      </div>

      {/* 📄 Portfolio Preview */}
      <div ref={portfolioRef} className="w-full flex justify-center">
        <div
          id="pdf-content"
          style={{
            width: "794px",
            height: "1140px",
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}

