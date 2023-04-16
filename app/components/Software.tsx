import SoftwareCard from "./SoftwareCard";

export default async function Software() {
  const projects = await getData();
  return (
    <section id="software" className="relative z-10">
      <div className="container">
        {/* title */}
        <header
          className="flex flex-col items-center gap-4 py-4
        md:flex-row"
        >
          <h1 className="title">Software: Destacados</h1>
          <p className="font-light text-sm italic">
            Click imagen para más detalles
          </p>
        </header>
        {/* GRID LAYOUR FOR PROJECTS */}
        <div className="grid gap-10">
          {projects.map((p) => (
            <SoftwareCard
              key={p.id}
              url={p.url}
              image_url={p.image_url}
              name={p.name}
              area={p.area}
              technologies={p.technologies}
              about={p.about}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// GET PROJECTS FROM REST API, PROVIDED IN .env as API_URL
// change nostore on prod
async function getData() {
  const res = await fetch(process.env.API_URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
