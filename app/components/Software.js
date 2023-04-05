import SoftwareCard from "./SoftwareCard";

export default async function Software() {
  const projects = await getData();
  return (
    <section id="software" className="container container-fix mx-auto">
      {/* title */}
      <header
        className="flex flex-col items-center gap-4 py-4
        md:flex-row"
      >
        <h1 className="title-no-padding">Proyectos Destacados</h1>
        <p className="italic font-light">Click en imagen para ver proyecto</p>
      </header>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div className="grid gap-10">
        {projects.map((p) => (
          <SoftwareCard
            id={p.id}
            url={p.url}
            image_url={p.image_url}
            name={p.name}
            area={p.area}
            technologies={p.technologies}
            about={p.about}
          />
        ))}
      </div>
    </section>
  );
}

// GET PROJECTS FROM REST API, PROVIDED IN .env as API_URL
async function getData() {
  const res = await fetch(process.env.API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
