export default function TemplateB({ data }: { data: any }) {
  return (
    <div className="w-full flex justify-center items-center print:bg-white">
      <div
        className="bg-white text-gray-900 shadow-md print:shadow-none"
        style={{
          width: "794px", // A4 width at 96 DPI
          height: "1123px", // A4 height at 96 DPI
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          fontSize: "12px",
        }}
      >
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Sidebar */}
          <aside className="w-full md:w-1/3 bg-gray-800 text-white p-4 rounded-md print:rounded-none">
            {data.profileImage && (
              <img
                src={data.profileImage}
                alt="Profile"
                className="w-28 h-28 object-cover rounded-full border-2 border-white mx-auto mb-4"
              />
            )}
            <div className="text-center mb-4">
              <h1 className="text-xl font-bold">{data.name}</h1>
              <p className="text-sm">{data.title}</p>
              <p className="text-xs italic text-gray-300">{data.tagline}</p>
            </div>

            <div className="text-sm mb-4">
              <h3 className="font-semibold text-gray-300">Contact</h3>
              <p>Email: {data.email}</p>
              <p>Phone: {data.phone}</p>
              <p>Location: {data.location}</p>
            </div>

            <div className="text-sm mb-4">
              <h3 className="font-semibold text-gray-300">Socials</h3>
              <p>LinkedIn: {data.linkedin}</p>
              <p>GitHub: {data.github}</p>
              <p>Twitter: {data.twitter}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-300 mb-1">Skills</h3>
              <div className="flex flex-wrap gap-1">
                {data.skills?.map((s: any) => (
                  <span
                    key={s.value}
                    className="bg-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="w-full md:w-2/3 text-sm overflow-y-auto space-y-4 pr-2">
            <section>
              <h2 className="text-base font-semibold border-b border-gray-300 mb-1">About Me</h2>
              <p>{data.bio}</p>
            </section>

            {data.services?.length > 0 && (
              <section>
                <h2 className="text-base font-semibold border-b border-gray-300 mb-1">Services</h2>
                <ul className="space-y-1">
                  {data.services.map((s: any, i: number) => (
                    <li key={i}>
                      <p className="font-medium">{s.title}</p>
                      <p className="text-gray-700">{s.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {data.projects?.length > 0 && (
              <section>
                <h2 className="text-base font-semibold border-b border-gray-300 mb-1">Portfolio</h2>
                <ul className="space-y-1">
                  {data.projects.map((p: any, i: number) => (
                    <li key={i}>
                      <p className="font-medium">{p.title}</p>
                      <p className="text-gray-700">{p.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {data.testimonials?.length > 0 && (
              <section>
                <h2 className="text-base font-semibold border-b border-gray-300 mb-1">Testimonials</h2>
                <ul className="space-y-1">
                  {data.testimonials.map((t: any, i: number) => (
                    <li key={i}>
                      <blockquote className="italic text-gray-700">"{t.quote}"</blockquote>
                      <p className="text-gray-500">— {t.name}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {(data.blogTitle || data.blogSummary) && (
              <section>
                <h2 className="text-base font-semibold border-b border-gray-300 mb-1">Blog</h2>
                <p className="font-medium">{data.blogTitle}</p>
                <p className="text-gray-700">{data.blogSummary}</p>
              </section>
            )}

            <section>
              <h2 className="text-base font-semibold border-b border-gray-300 mb-1">Contact Message</h2>
              <p>{data.message}</p>
              <p className="mt-1">
                Email: {data.contactEmail} | Phone: {data.contactPhone}
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
