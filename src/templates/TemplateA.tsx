// src/templates/TemplateA.tsx
export default function TemplateA({ data }: { data: any }) {
  return (
    <div className="bg-gray-950 text-white font-sans leading-relaxed min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {data.profileImage && (
            <img
              src={data.profileImage}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 mb-6"
            />
          )}
          <h1 className="text-4xl font-bold">{data.name}</h1>
          <p className="text-xl text-blue-300">{data.title}</p>
          <p className="mt-2 italic text-gray-400">{data.tagline}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b border-blue-500 inline-block">About</h2>
        <p className="text-gray-300 mb-4">{data.bio}</p>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
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
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 border-b border-blue-500 inline-block">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((s: any) => (
              <span
                key={s.value}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
              >
                {s.label}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Services */}
      {data.services?.length > 0 && (
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 border-b border-blue-500 inline-block">Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.services.map((s: any, idx: number) => (
              <div key={idx} className="bg-gray-800 p-4 rounded shadow">
                <h3 className="font-semibold text-lg text-blue-300">{s.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{s.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects?.length > 0 && (
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 border-b border-blue-500 inline-block">Projects</h2>
          <div className="space-y-4">
            {data.projects.map((p: any, idx: number) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-blue-300">{p.title}</h3>
                <p className="text-sm text-gray-400">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {data.testimonials?.length > 0 && (
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 border-b border-blue-500 inline-block">Testimonials</h2>
          <div className="space-y-4">
            {data.testimonials.map((t: any, idx: number) => (
              <div key={idx} className="bg-gray-800 p-4 rounded shadow">
                <p className="italic text-gray-300">"{t.quote}"</p>
                <p className="text-right text-sm text-blue-400 mt-2">— {t.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Blog */}
      {(data.blogTitle || data.blogSummary) && (
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 border-b border-blue-500 inline-block">Blog</h2>
          <p className="text-lg font-semibold text-blue-300">{data.blogTitle}</p>
          <p className="text-sm text-gray-400">{data.blogSummary}</p>
        </section>
      )}

      {/* Contact */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b border-blue-500 inline-block">Contact</h2>
        <p className="text-sm text-gray-300"><strong>Message:</strong> {data.message}</p>
        <p className="text-sm text-gray-300"><strong>Email:</strong> {data.contactEmail}</p>
        <p className="text-sm text-gray-300"><strong>Phone:</strong> {data.contactPhone}</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-6">
        © {new Date().getFullYear()} {data.name} • Portfolio generated with ❤️
      </footer>
    </div>
  );
}
