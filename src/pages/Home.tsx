import { useNavigate } from "react-router-dom";
import { usePortfolioContext } from "../context/PortfolioContext";

// Import images
import templateA from "../assets/Template-A.png";
import templateB from "../assets/Template-B.png";

export default function Home() {
  const { setSelectedTemplate } = usePortfolioContext();
  const navigate = useNavigate();

  const handleSelect = (
    template: "template-a" | "template-b"
  ) => {
    setSelectedTemplate(template);
    navigate("/create");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Select a Portfolio Template
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl">

        <TemplateCard
          title="Template A"
          image={templateA}
          onClick={() => handleSelect("template-a")}
        />
        <TemplateCard
          title="Template B"
          image={templateB}
          onClick={() => handleSelect("template-b")}
        />
      </div>
    </div>
  );
}

function TemplateCard({
  title,
  image,
  onClick,
}: {
  title: string;
  image: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-lg border-2 border-transparent hover:border-blue-500 cursor-pointer transition"
    >
      <div className="relative w-[235px]" style={{ aspectRatio: "210 / 297" }}>
        <img
          src={image}
          alt={title}
          className="rounded-t-lg object-cover w-full h-full"
        />
      </div>
      <div className="p-2 text-center">
        <h2 className="text-sm font-semibold text-white">{title}</h2>
      </div>
    </div>
  );
}

