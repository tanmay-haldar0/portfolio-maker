export default function TemplateD({ data }: { data: any }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="bg-white text-black shadow-2xl p-10 overflow-hidden"
        style={{
          width: "794px", // A4 width in pixels at 96 DPI
          height: "1123px", // A4 height in pixels at 96 DPI
        }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          {data.profileImage && (
            <img
              src={data.profileImage}
              alt="Profile"
              className="w-28 h-28 object-cover rounded-full mx-auto border-2 border-gray-300"
            />
          )}
          <h1 className="text-3xl font-bold mt-4">{data.name}</h1>
          <p className="text-lg text-gray-700">{data.title}</p>
          <p className="text-sm italic text-gray-500">{data.tagline}</p>
        </div>

        {/* Contact & About */}
        <section className="mb-6 text-sm">
          <h2 className="font-semibold text-lg mb-1 border-b border-gray-300">About Me</h2>
          <p>{data.bio || <span className="text-gray-400">No bio provided.</span>}</p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-700">
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Location:</strong> {data.location}</p>
            <p><strong>LinkedIn:</strong> {data.linkedin}</p>
            <p><strong>GitHub:</strong> {data.github}</p>
            <p><strong>Twitter:</strong> {data.twitter}</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6 text-sm">
          <h2 className="font-semibold text-lg mb-1 border-b border-gray-300">Skills</h2>
          {data.skills?.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-1">
              {data.skills.map((s: any) => (
                <span
                  key={s.value}
                  className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-xs"
                >
                  {s.label}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No skills added.</p>
          )}
        </section>

        {/* Services */}
        <section className="mb-6 text-sm">
          <h2 className="font-semibold text-lg mb-1 border-b border-gray-300">Services</h2>
          {data.services?.length > 0 ? (
            data.services.map((s: any, i: number) => (
              <div key={i} className="mb-2">
                <p className="font-medium">{s.title}</p>
                <p>{s.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No services listed.</p>
          )}
        </section>

        {/* Projects */}
        <section className="mb-6 text-sm">
          <h2 className="font-semibold text-lg mb-1 border-b border-gray-300">Projects</h2>
          {data.projects?.length > 0 ? (
            data.projects.map((p: any, i: number) => (
              <div key={i} className="mb-2">
                <p className="font-medium">{p.title}</p>
                <p>{p.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No projects listed.</p>
          )}
        </section>

        {/* Testimonials */}
        <section className="mb-6 text-sm">
          <h2 className="font-semibold text-lg mb-1 border-b border-gray-300">Testimonials</h2>
          {data.testimonials?.length > 0 ? (
            data.testimonials.map((t: any, i: number) => (
              <div key={i} className="mb-2">
                <blockquote className="italic text-gray-600">"{t.quote}"</blockquote>
                <p className="text-right text-sm text-gray-500">— {t.name}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No testimonials provided.</p>
          )}
        </section>

        {/* Blog */}
        <section className="mb-6 text-sm">
          <h2 className="font-semibold text-lg mb-1 border-b border-gray-300">Blog</h2>
          {data.blogTitle ? (
            <>
              <p className="font-medium">{data.blogTitle}</p>
              <p>{data.blogSummary}</p>
            </>
          ) : (
            <p className="text-gray-400">No blog information available.</p>
          )}
        </section>

        {/* Contact */}
        <section className="text-sm">
          <h2 className="font-semibold text-lg mb-1 border-b border-gray-300">Final Contact</h2>
          <p>{data.message}</p>
          <p className="mt-2 text-gray-700">
            Email: {data.contactEmail} | Phone: {data.contactPhone}
          </p>
        </section>
      </div>
    </div>
  );
}
