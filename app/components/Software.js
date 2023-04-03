export default async function Software() {
  const projects = await getData();
  return (
    <div id="software" className="container container-fix mx-auto">
      <h1 className="title">Proyectos Destacados</h1>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div className="grid gap-10">
        {projects.map((p) => (
          <div
            className="grid gap-2 
          md:grid-cols-2 md:gap-8"
            key={p.id}
          >
            {/* image with link to project */}
            <div
              className="aspect-[4/3] overflow-hidden rounded-xl 
              shadow-md"
            >
              <a href={p.url}>
                <img
                  src={p.image_url}
                  alt="project-image"
                  className="object-cover h-full w-full
                  hover:scale-125 
                  transition ease-in-out duration-300"
                />
              </a>
            </div>

            {/* text section */}
            <div
              className="grid gap-3 
              place-content-center"
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

// GET PROJECTS FROM REST API, PROVIDED IN .env as API_URL
async function getData() {
  const res = await fetch(process.env.API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
