function About() {
    return (
        <section id="about" className="px-6 py-20 md:px-10 md:py-24">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">

                <div className="flex flex-col gap-6">
                    <h2 className="text-sm font-medium tracking-[0.18em] text-muted">
                        01 / ABOUT
                    </h2>

                    <p className="font-serif text-3xl leading-snug tracking-tight md:text-4xl">
                        Keep production stable. Then make it better.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <p className="text-lg leading-relaxed text-muted">
                        I stay hands-on while leading, working on implementation,
                        troubleshooting, and improving systems already in production.
                        Stability comes first.
                    </p>

                    <p className="text-lg leading-relaxed text-muted">
                        I am comfortable working in existing codebases, understanding
                        how systems fit together, and turning requirements into solutions
                        that ship. I am also learning React and modern front-end
                        development through personal work.
                    </p>

                   <p className="pt-2 font-mono text-xs text-muted">
                        LEADERSHIP · FORMS DEVELOPMENT · PRODUCTION SUPPORT · SYSTEM IMPROVEMENT · WEB DEVELOPMENT
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;