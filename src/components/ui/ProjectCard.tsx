import LinkButton from "./LinkButton";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

function ProjectCard({
    title,
    description,
    technologies,
    link
}: ProjectCardProps){
    return (

        <article className="border border-foreground/20 rounded-lg p-6 space-y-5">
            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="text-muted max-w-2xl">{description}</p>

            <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                ))}
            </div>

            <LinkButton href={link} variant="secondary">View Project</LinkButton>

        </article>

    );
}

export default ProjectCard;