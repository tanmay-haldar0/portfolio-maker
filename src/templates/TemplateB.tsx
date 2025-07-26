// src/templates/TemplateB.tsx
export default function TemplateB({ data }: { data: any }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 text-white min-h-screen w-full font-sans">
      {/* Hero */}
      <section className="text-center py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {data.profileImage && (
            <img
              src={data.profileImage}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white mb-6"
            />
          )}
          <h1 className="text-4xl font-bold">{data.name}</h1>
          <p className="text-xl text-blue-400">{data.title}</p>
          <p className="text-gray-400 italic mt-2">{data.tagline}</p>
        </div>
      </section>

      {/* About */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">About Me</h2>
        <p className="text-gray-300 mb-6">{data.bio}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400">
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Location:</strong> {data.location}</p>
          <p><strong>LinkedIn:</strong> {data.linkedin}</p>
          <p><strong>GitHub:</strong> {data.github}</p>
          <p><strong>Twitter:</strong> {data.twitter}</p>
        </div>
      </section>

      {/* Skills */}
      {data.skills?.length > 0 && (
        <section className="py-10 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((s: any) => (
              <span
                key={s.value}
                className="bg-blue-700/80 text-white px-3 py-1 rounded-full text-sm"
              >
                {s.label}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Services */}
      {data.services?.length > 0 && (
        <section className="py-10 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.services.map((s: any, i: number) => (
              <div key={i} className="bg-gray-800/50 rounded-lg p-4 shadow">
                <h3 className="font-semibold text-lg text-white">{s.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{s.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects?.length > 0 && (
        <section className="py-10 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.projects.map((p: any, i: number) => (
              <div key={i} className="bg-gray-800/50 rounded-lg p-4 shadow">
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {data.testimonials?.length > 0 && (
        <section className="py-10 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Testimonials</h2>
          <div className="space-y-4">
            {data.testimonials.map((t: any, i: number) => (
              <div key={i} className="bg-gray-800/50 rounded p-4 shadow">
                <blockquote className="italic text-gray-300">"{t.quote}"</blockquote>
                <p className="text-sm text-blue-300 mt-2">— {t.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Blog */}
      {(data.blogTitle || data.blogSummary) && (
        <section className="py-10 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Blog</h2>
          <p className="text-lg font-semibold text-white">{data.blogTitle}</p>
          <p className="text-sm text-gray-400">{data.blogSummary}</p>
        </section>
      )}

      {/* Contact */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Contact</h2>
        <p className="text-sm text-gray-300"><strong>Message:</strong> {data.message}</p>
        <p className="text-sm text-gray-300 mt-1"><strong>Email:</strong> {data.contactEmail}</p>
        <p className="text-sm text-gray-300"><strong>Phone:</strong> {data.contactPhone}</p>
      </section>

      <footer className="text-center py-6 text-xs text-gray-500 border-t border-gray-800 mt-10">
        © {new Date().getFullYear()} {data.name} • All rights reserved
      </footer>
    </div>
  );
}
