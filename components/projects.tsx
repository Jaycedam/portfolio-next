import ProjectCard from "@components/project-card";
import { getProjects } from "@utils/get-data";

export default async function Projects() {
  // if the prop homepage = true, fetch only 4 values with the homepage property set to true, else return all items
  const data = await getProjects();

  return (
    <section id="projects">
      <div className="container space-y-4">
        {/* title */}
        <div className="space-y-1">
          <h1 className="heading">Proyectos destacados</h1>
          <p className="subheading">Click en imagen para más detalles.</p>
        </div>
        {/* GRID LAYOUR FOR PROJECTS */}
        <div className="grid gap-4 md:grid-cols-2">
          {data.map((item) => (
            <ProjectCard key={item.id} {...item}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}
