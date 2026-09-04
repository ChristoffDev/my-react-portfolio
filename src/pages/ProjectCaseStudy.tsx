import { useEffect, useRef, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import {
    getProjectBySlug,
    getProjectNumber,
    type ProjectImage,
} from "../data/projects";

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

function Screenshot({ src, alt }: ProjectImage) {
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
                className="block w-full overflow-hidden border border-border text-left"
            >
                <img
                    src={src}
                    alt={alt}
                    className="aspect-[4/3] w-full object-cover object-top"
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
            <main className="px-6 py-20 md:px-10 md:py-24">
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
        <main className="px-6 py-20 md:px-10 md:py-24">
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

                {project.link ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block text-sm text-muted transition-colors hover:text-foreground"
                    >
                        VIEW PROJECT →
                    </a>
                ) : null}

                <div className="mt-12 max-w-xl">
                    {hero ? <Screenshot src={hero.src} alt={hero.alt} /> : <ScreenshotFrame />}
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

                <CaseSection label="IMPACT">
                    <p className="text-lg leading-relaxed text-muted">{project.impact}</p>
                </CaseSection>

                {rest.length > 0 ? (
                    <div className="mt-10 grid max-w-2xl gap-4 md:grid-cols-2">
                        {rest.map((image) => (
                            <Screenshot key={image.src} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                ) : null}

                <CaseSection label="KEY CONTRIBUTIONS">
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
