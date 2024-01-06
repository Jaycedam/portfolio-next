import Projects from "@/components/projects";

export default async function ProjectsHome() {
  return (
    <main>
      <Projects highlights={false} />
    </main>
  );
}
