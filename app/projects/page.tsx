import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-teal-400">Mes projets</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Portfolio"
          description="Portfolio personnel en Next.js"
        />
        <ProjectCard
          title="Application Web"
          description="Projet fullstack"
        />
      </div>
    </section>
  );
}
