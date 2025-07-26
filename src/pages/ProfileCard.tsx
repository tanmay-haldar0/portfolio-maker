import { useParams, useNavigate } from "react-router-dom";
import { loadFromLocal } from "../utils/storage";

export default function ProfileCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = loadFromLocal(`portfolio_${id}`);

  if (!data) return <div className="text-white p-6">Profile not found.</div>;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 text-white">
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-sm text-center">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />
        )}
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="text-sm text-gray-300">{data.title}</p>
        <p className="italic text-gray-400 mb-4">{data.tagline}</p>

        <div className="text-sm space-y-1 text-gray-300 mb-4">
          {data.location && <p>📍 {data.location}</p>}
          {data.email && <p>📧 {data.email}</p>}
          {data.phone && <p>📞 {data.phone}</p>}
        </div>

        {data.skills?.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-white mb-1">Skills</h3>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {data.skills.map((skill: any) => (
                <span
                  key={skill.value}
                  className="bg-blue-700 px-2 py-1 rounded-full text-white"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {(data.linkedin || data.github || data.twitter) && (
          <div className="text-xs text-blue-400 mb-4 space-y-1">
            {data.linkedin && (
              <p>
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                  🔗 LinkedIn
                </a>
              </p>
            )}
            {data.github && (
              <p>
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  💻 GitHub
                </a>
              </p>
            )}
            {data.twitter && (
              <p>
                <a href={data.twitter} target="_blank" rel="noopener noreferrer">
                  🐦 Twitter
                </a>
              </p>
            )}
          </div>
        )}

        <button
          onClick={() => navigate(`/portfolio/${id}`)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm"
        >
          View Full Portfolio →
        </button>
      </div>
    </div>
  );
}
