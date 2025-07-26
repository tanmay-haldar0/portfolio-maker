export default function TemplateA({ data }: { data: any }) {
  return (
    <div
      className="bg-white text-black mx-auto p-10 shadow-md"
      style={{
        width: "210mm",
        height: "297mm",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div className="bg-white text-black max-w-3xl mx-auto p-6 shadow-lg font-sans leading-relaxed">
        {/* Header */}
        <div className="flex items-center gap-6 mb-6">
          {data.profileImage && (
            <img
              src={data.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="text-xl text-gray-700">{data.title}</p>
            <p className="text-sm italic text-gray-500">{data.tagline}</p>
          </div>
        </div>

        {/* About */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">About</h2>
          <p className="mb-2">{data.bio}</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Email:</strong> {data.email}</li>
            <li><strong>Phone:</strong> {data.phone}</li>
            <li><strong>Location:</strong> {data.location}</li>
            <li><strong>LinkedIn:</strong> {data.linkedin}</li>
            <li><strong>GitHub:</strong> {data.github}</li>
            <li><strong>Twitter:</strong> {data.twitter}</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills?.map((s: any) => (
              <span key={s.value} className="bg-blue-200 text-blue-900 px-2 py-1 rounded text-sm">
                {s.label}
              </span>
            ))}
          </div>
        </section>

        {/* Services */}
        {data.services?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Services</h2>
            <ul className="space-y-2">
              {data.services.map((s: any, index: number) => (
                <li key={index}>
                  <p className="font-medium">{s.title}</p>
                  <p className="text-sm text-gray-700">{s.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Portfolio */}
        {data.projects?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Projects</h2>
            <ul className="space-y-3">
              {data.projects.map((project: any, index: number) => (
                <li key={index}>
                  <p className="font-medium">{project.title}</p>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Testimonials */}
        {data.testimonials?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Testimonials</h2>
            <ul className="space-y-3">
              {data.testimonials.map((t: any, index: number) => (
                <li key={index}>
                  <p className="italic text-gray-700">"{t.quote}"</p>
                  <p className="text-sm text-gray-500">— {t.name}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Blog */}
        {(data.blogTitle || data.blogSummary) && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Blog</h2>
            <p className="font-medium">{data.blogTitle}</p>
            <p className="text-sm text-gray-700">{data.blogSummary}</p>
          </section>
        )}

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Contact</h2>
          <p className="text-sm text-gray-700 mb-1"><strong>Message:</strong> {data.message}</p>
          <p className="text-sm text-gray-700 mb-1"><strong>Email:</strong> {data.contactEmail}</p>
          <p className="text-sm text-gray-700"><strong>Phone:</strong> {data.contactPhone}</p>
        </section>
      </div>
    </div>
  );
}

