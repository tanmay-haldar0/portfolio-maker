import { loadAllPortfolios } from "../utils/storage";
import ProfileCard from "./ProfileCard";

export default function PreviewPage() {
  const portfolios = loadAllPortfolios();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Preview All Portfolios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolios.map((item) =>
          item && item.name ? ( // Make sure data is valid
            <ProfileCard key={item.id} id={item.id} data={item} />
          ) : null
        )}
      </div>
    </div>
  );
}
