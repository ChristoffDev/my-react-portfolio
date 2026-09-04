import { useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";

function Projects() {
    const [index, setIndex] = useState(0);
    const total = PROJECTS.length;
    const project = PROJECTS[index];
    const counter = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

    const goTo = (next: number) => {
        setIndex((next + total) % total);
    };

    return (
        <section id="projects" className="px-6 py-20 md:px-10 md:py-24">
            <div className="mx-auto max-w-6xl">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-sm font-medium tracking-[0.18em] text-muted">
                        03 / PROJECTS
                    </h2>
                    <p className="font-mono text-xs text-muted">{counter}</p>
                </div>

                <div
                    key={index}
                    className="mt-8 grid gap-10 motion-safe:animate-[fade-in_200ms_ease-out] motion-reduce:animate-none lg:grid-cols-2 lg:items-start"
                >
                    <Link
                        to={`/projects/${project.slug}`}
                        data-cursor="view"
                        className="overflow-hidden border border-border"
                    >
                        {project.images[0] ? (
                            <img
                                src={project.images[0].src}
                                alt={project.images[0].alt}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] w-full object-cover object-top grayscale"
                            />
                        ) : (
                            <div className="flex aspect-[4/3] items-center justify-center">
                                <p className="font-mono text-xs tracking-[0.16em] text-muted">
                                    SCREENSHOT
                                </p>
                            </div>
                        )}
                    </Link>

                    <div>
                        <h3 className="text-2xl font-semibold tracking-tight" aria-live="polite">
                            {project.title}
                        </h3>

                        <p className="mt-3 text-lg leading-relaxed text-muted">
                            {project.description}
                        </p>

                        <p className="mt-4 font-mono text-xs text-muted">
                            {project.technologies.join(" · ").toUpperCase()}
                        </p>

                        <div className="mt-4 flex flex-col items-start gap-2">
                            <Link
                                to={`/projects/${project.slug}`}
                                className="text-sm text-muted transition-colors hover:text-foreground"
                            >
                                VIEW CASE STUDY →
                            </Link>

                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    VIEW PROJECT →
                                </a>
                            ) : null}
                        </div>

                        <div className="mt-8 flex items-center gap-6">
                            <button
                                type="button"
                                onClick={() => goTo(index - 1)}
                                className="text-sm text-muted transition-colors hover:text-foreground"
                                aria-label="Previous project"
                            >
                                ←
                            </button>
                            <button
                                type="button"
                                onClick={() => goTo(index + 1)}
                                className="text-sm text-muted transition-colors hover:text-foreground"
                                aria-label="Next project"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
