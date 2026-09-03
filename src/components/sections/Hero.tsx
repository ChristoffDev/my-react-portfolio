import profileImg from "../../assets/profile-img.png";

function Hero() {
    return (
        <section className="flex min-h-[calc(100svh-5rem)] flex-col px-6 py-10 md:px-10 md:py-12">
            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">

                <div className="grid min-h-0 flex-1 items-center gap-10 md:grid-cols-[1fr_0.9fr] lg:gap-16">

                    {/* Content */}
                    <div className="flex flex-col gap-6">

                        <p className="text-sm font-medium tracking-[0.18em] text-muted">
                            LEAD DEVELOPER
                        </p>

                        <div>
                            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
                                Christopher
                                <br />
                                Perez
                            </h1>

                            <p className="mt-4 text-xl text-muted">
                                Web Developer
                            </p>
                        </div>

                        <p className="max-w-lg text-lg leading-relaxed text-muted">
                            I build and support production web solutions, with experience
                            in forms development, website implementation, WordPress, and
                            production support.
                        </p>

                        <div className="flex flex-wrap items-center gap-5">
                            <a
                                href="#projects"
                                className="bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="px-2 py-2.5 text-sm text-muted transition-colors hover:text-foreground"
                            >
                                Contact Me →
                            </a>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-x-5 gap-y-2 pt-3 text-xs font-mono text-muted">
                            <span>2+ YEARS EXPERIENCE</span>
                            <span>12 DEVELOPERS LED</span>
                            <span>440+ FORMS IMPLEMENTED</span>
                        </div>
                    </div>

                    {/* Profile */}
                    <div className="relative h-full min-h-0">
                        <img
                            src={profileImg}
                            alt="Christopher Perez, lead developer"
                            className="h-full max-h-full w-full object-contain object-bottom saturate-[.48] brightness-[1.02]"
                        />
                    </div>

                </div>

                {/* Contact / Availability */}
                <div id="contact" className="mt-auto shrink-0 border-t border-foreground/10 pt-6">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                        <p className="text-sm text-muted">
                            Open to new opportunities
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                            <a
                                href="mailto:christopherperez.dev@gmail.com"
                                className="text-muted transition-colors hover:text-foreground"
                            >
                                christopherperez.dev@gmail.com
                            </a>

                            <a
                                href="https://www.linkedin.com/in/christopher-perez-85a68729a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted transition-colors hover:text-foreground"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://github.com/ChristoffDev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted transition-colors hover:text-foreground"
                            >
                                GitHub
                            </a>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted transition-colors hover:text-foreground"
                            >
                                Resume ↓
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;
