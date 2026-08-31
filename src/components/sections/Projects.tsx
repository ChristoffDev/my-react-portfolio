import ProjectCard from "../ui/ProjectCard";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
}

function Projects() {

    const projects: Project[] = [
        {
            title: "My React Portfolio",
            description: "A personal portfolio built while learning React, TypeScript, and Tailwind CSS.",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            link: "#",
            image: "/projects/portfolio.png",
        },
        {
            title: "Online Form Database Panel",
            description: "...",
            technologies: ["PHP", "..."],
            link: "#",
            image: "/projects/forms.png",
        },

    ]

    return (
        <section id="projects" className="px-4 py-20">
            <div className="mx-auto max-w-4xl space-y-6">
                <h2 className="text-3xl font-bold">
                    Projects
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                            image={project.image}
                        />
                        )
                    
                    )}
                </div>
                
            </div>

        </section>
    );

}

export default Projects;