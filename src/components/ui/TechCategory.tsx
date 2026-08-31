import TechBadge from "../ui/TechBadge";

interface TechCategoryProps {
    title: string;
    technologies: string[];
}

function TechCategory({ title, technologies }: TechCategoryProps){
    return(
        <div className="space-y-3">
            <h3 className="font-bold">{title}</h3>
            <div className="flex flex-wrap gap-4">
                {technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                ))}

            </div>
        </div>
    );
}

export default TechCategory;