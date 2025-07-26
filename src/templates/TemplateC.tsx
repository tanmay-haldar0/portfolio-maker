export default function TemplateC({ data }: { data: any }) {
  return (
    <div className="text-black flex justify-center items-center bg-gray-100 print:bg-white">
      <div
        className="shadow-lg border print:border-none bg-white flex"
        style={{
          width: "794px", // A4 width
          height: "1123px", // A4 height
          boxSizing: "border-box",
        }}
      >
        {/* Sidebar */}
        <div className="w-[30%] bg-red-400 text-white p-5 flex flex-col gap-4">
          {data.profileImage && (
            <img
              src={data.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-white mx-auto"
            />
          )}

          <div className="text-center mt-4">
            <h1 className="text-xl font-bold">{data.name}</h1>
            <p className="text-sm">{data.title}</p>
            <p className="text-xs italic text-gray-300">{data.tagline}</p>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold border-b border-gray-600 mb-1 pb-1">Contact</h3>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Location: {data.location}</p>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold border-b border-gray-600 mb-1 pb-1">Links</h3>
            {data.linkedin && <p>LinkedIn: {data.linkedin}</p>}
            {data.github && <p>GitHub: {data.github}</p>}
            {data.twitter && <p>Twitter: {data.twitter}</p>}
          </div>

          <div className="text-sm">
            <h3 className="font-semibold border-b border-gray-600 mb-1 pb-1">Skills</h3>
            <div className="flex flex-wrap gap-1 mt-1">
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
        </div>

        {/* Main Content */}
        <div className="w-[70%] p-6 pr-8 text-sm flex flex-col gap-5 overflow-hidden">
          <Section title="About Me">
            <p>{data.bio}</p>
          </Section>

          <Section title="Services">
            {data.services?.map((service: any, index: number) => (
              <div key={index} className="mb-2">
                <h4 className="font-semibold">{service.title}</h4>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </Section>

          <Section title="Projects">
            {data.projects?.map((proj: any, index: number) => (
              <div key={index} className="mb-2">
                <h4 className="font-semibold">{proj.title}</h4>
                <p className="text-gray-700">{proj.description}</p>
              </div>
            ))}
          </Section>

          {data.testimonials?.length > 0 && (
            <Section title="Testimonials">
              {data.testimonials.map((testi: any, index: number) => (
                <div key={index} className="mb-1">
                  <p className="italic text-gray-700">"{testi.quote}"</p>
                  <p className="text-xs text-right text-gray-500">— {testi.name}</p>
                </div>
              ))}
            </Section>
          )}

          {(data.blogTitle || data.blogSummary) && (
            <Section title="Blog">
              <p className="font-semibold">{data.blogTitle}</p>
              <p className="text-gray-700">{data.blogSummary}</p>
            </Section>
          )}

          <Section title="Contact Message">
            <p>{data.message}</p>
            <p className="mt-1 text-gray-600">
              Email: {data.contactEmail} | Phone: {data.contactPhone}
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

// Reusable Section component
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
