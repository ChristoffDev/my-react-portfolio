import { useEffect, useRef, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import {
    getProjectBySlug,
    getProjectNumber,
    type ProjectImage,
} from "../data/projects";
import ProjectPoster from "../components/ui/ProjectPoster";

function BackLink({ className = "" }: { className?: string }) {
    return (
        <Link
            to="/#projects"
            className={`text-sm text-muted transition-colors hover:text-foreground ${className}`}
        >
            ← BACK TO PROJECTS
        </Link>
    );
}

function CaseSection({
    label,
    children,
}: {
    label: string;
    children: ReactNode;
}) {
    return (
        <section className="mt-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-muted">
                {label}
            </h2>
            <div className="mt-4 max-w-2xl">{children}</div>
        </section>
    );
}

function GitHubIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
        </svg>
    );
}

function Screenshot({ src, alt, contain = false }: ProjectImage & { contain?: boolean }) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const open = () => {
        dialogRef.current?.showModal();
    };

    const close = () => {
        dialogRef.current?.close();
    };

    return (
        <>
            <button
                type="button"
                onClick={open}
                aria-haspopup="dialog"
                aria-label={`View full image: ${alt}`}
                data-cursor="view"
                className="block w-full overflow-hidden border border-border text-left"
            >
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className={
                        contain
                            ? "aspect-[4/3] w-full object-contain p-4"
                            : "aspect-[4/3] w-full object-cover object-top"
                    }
                />
            </button>

            <dialog
                ref={dialogRef}
                className="h-full max-h-none w-full max-w-none border-0 bg-transparent p-0"
                onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        close();
                    }
                }}
            >
                <div
                    className="relative flex min-h-full items-center justify-center bg-foreground/80 p-6"
                    onClick={close}
                >
                    <button
                        type="button"
                        onClick={close}
                        className="absolute right-6 top-6 text-sm text-background transition-opacity hover:opacity-80"
                    >
                        Close
                    </button>
                    <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        className="max-h-[90svh] max-w-[90vw] object-contain"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            </dialog>
        </>
    );
}

function ScreenshotFrame() {
    return (
        <div className="flex aspect-[4/3] items-center justify-center border border-border">
            <p className="font-mono text-xs tracking-[0.16em] text-muted">
                SCREENSHOT
            </p>
        </div>
    );
}

function ProjectCaseStudy() {
    const { slug } = useParams();
    const project = slug ? getProjectBySlug(slug) : undefined;
    const number = slug ? getProjectNumber(slug) : 0;

    useEffect(() => {
        document.title = project
            ? `${project.title} — Christopher Perez`
            : "Page not found — Christopher Perez";
    }, [project]);

    if (!project) {
        return (
            <main id="main" className="px-6 py-20 md:px-10 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm text-muted">This project could not be found.</p>
                    <BackLink className="mt-6 inline-block" />
                </div>
            </main>
        );
    }

    const [hero, ...rest] = project.images;
    const label = `${String(number).padStart(2, "0")} / CASE STUDY`;

    return (
        <main id="main" className="px-6 py-20 md:px-10 md:py-24">
            <article className="mx-auto max-w-6xl">
                <BackLink />

                <p className="mt-10 text-sm font-medium tracking-[0.18em] text-muted">
                    {label}
                </p>

                <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                    {project.title}
                </h1>

                <p className="mt-3 max-w-3xl text-xl text-muted">{project.subtitle}</p>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
                    {project.lede}
                </p>

                <p className="mt-6 font-mono text-xs text-muted">
                    {project.technologies.join(" · ").toUpperCase()}
                </p>

                {project.link || project.repo ? (
                    <div className="mt-6 flex items-center gap-5">
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
                        {project.repo ? (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted transition-colors hover:text-foreground"
                                aria-label="View source on GitHub"
                            >
                                <GitHubIcon />
                            </a>
                        ) : null}
                    </div>
                ) : null}

                <div className="mt-12 max-w-xl">
                    {project.poster ? (
                        <div className="overflow-hidden border border-border">
                            <ProjectPoster poster={project.poster} />
                        </div>
                    ) : hero ? (
                        <Screenshot src={hero.src} alt={hero.alt} contain={project.nda} />
                    ) : (
                        <ScreenshotFrame />
                    )}
                    {project.nda ? (
                        <p className="mt-3 font-mono text-xs tracking-[0.16em] text-muted">
                            {project.poster
                                ? "Internal materials withheld under NDA."
                                : "Product UI withheld under NDA."}
                        </p>
                    ) : null}
                </div>

                <CaseSection label="PROJECT CONTEXT">
                    <p className="text-lg leading-relaxed text-muted">{project.context}</p>
                </CaseSection>

                <CaseSection label="OVERVIEW">
                    <p className="text-lg leading-relaxed text-muted">{project.overview}</p>
                </CaseSection>

                <CaseSection label="BUSINESS PROBLEM">
                    <p className="text-lg leading-relaxed text-muted">
                        {project.businessProblem}
                    </p>
                </CaseSection>

                {project.ongoing ? (
                    <CaseSection label="PROJECT STATUS">
                        <p className="text-lg leading-relaxed text-muted">
                            Ongoing. The platform is actively being developed and improved,
                            so the implementation and feature set may continue to change.
                        </p>
                    </CaseSection>
                ) : (
                    <CaseSection label="IMPACT">
                        <p className="text-lg leading-relaxed text-muted">{project.impact}</p>
                    </CaseSection>
                )}

                {rest.length > 0 ? (
                    <div className="mt-10 grid max-w-2xl gap-4 md:grid-cols-2">
                        {rest.map((image) => (
                            <Screenshot key={image.src} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                ) : null}

                <CaseSection label={project.ongoing ? "CURRENT WORK" : "KEY CONTRIBUTIONS"}>
                    <ul className="list-disc space-y-2 pl-5 text-lg leading-relaxed text-muted">
                        {project.contributions.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </CaseSection>

                <CaseSection label="TECHNOLOGIES">
                    <p className="font-mono text-xs text-muted">
                        {project.stack.join(" · ").toUpperCase()}
                    </p>
                </CaseSection>

                {project.tools.length > 0 ? (
                    <CaseSection label="TOOLS">
                        <p className="font-mono text-xs text-muted">
                            {project.tools.join(" · ").toUpperCase()}
                        </p>
                    </CaseSection>
                ) : null}

                <CaseSection label="PROJECT NOTES">
                    <div className="space-y-4">
                        {project.notes.map((paragraph) => (
                            <p key={paragraph} className="text-lg leading-relaxed text-muted">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </CaseSection>

                <BackLink className="mt-20 inline-block" />
            </article>
        </main>
    );
}

export default ProjectCaseStudy;
