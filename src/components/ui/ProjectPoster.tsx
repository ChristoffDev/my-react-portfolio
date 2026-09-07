import type { ProjectPoster as ProjectPosterData } from "../../data/projects";

function ProjectPoster({ poster }: { poster: ProjectPosterData }) {
    return (
        <div className="flex aspect-[4/3] flex-col justify-between bg-foreground p-6 text-background md:p-8">
            <div>
                <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {poster.title}
                </p>
                <p className="mt-2 text-sm text-background/70">{poster.subtitle}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-background/60">
                    {poster.stack}
                </p>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-background/70">
                {poster.status}
            </p>
        </div>
    );
}

export default ProjectPoster;
