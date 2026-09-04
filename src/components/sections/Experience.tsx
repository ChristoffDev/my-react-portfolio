import {
    CAREER_PROGRESSION,
    EDUCATION,
    EXPERIENCE,
} from "../../data/experience";

function Experience() {
    return (
        <section id="experience" className="px-6 py-20 md:px-10 md:py-24">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-sm font-medium tracking-[0.18em] text-muted">
                    04 / EXPERIENCE
                </h2>

                <ol className="mt-12">
                    {EXPERIENCE.map((entry, index) => (
                        <li
                            key={`${entry.role}-${entry.period}`}
                            className={
                                index === 0
                                    ? "pt-0"
                                    : "mt-10 border-t border-border pt-10"
                            }
                        >
                            <div className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-12">
                                <p className="font-mono text-xs tracking-[0.16em] text-muted">
                                    {entry.period}
                                </p>

                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight">
                                        {entry.role}
                                    </h3>
                                    {entry.company ? (
                                        <p className="mt-1 text-muted">{entry.company}</p>
                                    ) : null}
                                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                                        {entry.summary}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="mt-10 border-t border-border pt-10">
                    <div className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-12">
                        <p className="font-mono text-xs tracking-[0.16em] text-muted">
                            {CAREER_PROGRESSION.label.toUpperCase()}
                        </p>
                        <div>
                            <p className="text-xl font-semibold tracking-tight">
                                {CAREER_PROGRESSION.path}
                            </p>
                            <p className="mt-1 font-mono text-xs tracking-[0.16em] text-muted">
                                {CAREER_PROGRESSION.period}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-border pt-10">
                    <div className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-12">
                        <p className="font-mono text-xs tracking-[0.16em] text-muted">
                            {EDUCATION.label.toUpperCase()}
                        </p>
                        <div>
                            <h3 className="text-xl font-semibold tracking-tight">
                                {EDUCATION.degree}
                            </h3>
                            <p className="mt-1 text-muted">{EDUCATION.school}</p>
                            <p className="mt-1 font-mono text-xs tracking-[0.16em] text-muted">
                                {EDUCATION.period}
                            </p>
                            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                                {EDUCATION.note}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
