export default async function Projects() {
  const projects = await getData();
  return (
    <div>
      <h1>PROYECTOS DESTACADOS</h1>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div className="grid gap-10">
        {projects.map((p) => (
          <div className="grid md:grid-cols-2" key={p.id}>
            {/* image with link to project */}
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <a href={p.url}>
                <img
                  src={p.image_url}
                  alt="project-image"
                  className="hover:scale-125 transition-all object-cover h-full w-full"
                />
              </a>
            </div>

            {/* text section */}
            <div
              className="grid gap-3 
              place-content-center 
              md:ml-4"
            >
              <div>
                <h1 className="font-black text-lg">
                  {p.name} - {p.area}
                </h1>
                <h4 className="font-light text-sm">{p.technologies}</h4>
              </div>
              <p>{p.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function getData() {
  const res = await fetch(process.env.API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
