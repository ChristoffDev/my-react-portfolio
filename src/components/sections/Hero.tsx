import profileImg from "../../assets/profile-img.png";

function Hero() {
    return (
        <section className="flex h-[calc(100svh-5rem)] flex-col overflow-hidden px-6 py-6 md:px-10 md:py-8">
            <div className="mx-auto flex h-full min-h-0 w-full max-w-6xl flex-col">

                <div className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] gap-6 lg:grid-cols-[1fr_0.85fr] lg:grid-rows-none lg:gap-12 xl:gap-16">

                    {/* Content */}
                    <div className="flex min-h-0 flex-col gap-4 md:gap-6">

                        <p className="text-sm font-medium tracking-[0.18em] text-muted">
                            LEAD DEVELOPER
                        </p>

                        <div>
                            <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
                                Christopher
                                <br />
                                Perez
                            </h1>

                            <p className="mt-3 text-lg text-muted md:mt-4 md:text-xl">
                                Web Developer
                            </p>
                        </div>

                        <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
                            I build and support production web solutions, with experience in forms development, website implementation, WordPress, and technical troubleshooting.
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
                    <div className="relative flex h-full min-h-0 min-w-0 items-end justify-center overflow-hidden lg:justify-end">
                        <img
                            src={profileImg}
                            alt="Christopher Perez, lead developer"
                            className="mx-auto block h-full w-auto min-h-0 max-h-full max-w-full object-contain object-bottom saturate-[.48] brightness-[1.02] lg:mx-0"
                        />
                    </div>

                </div>

                {/* Contact / Availability */}
                <div className="shrink-0 border-t border-foreground/10 pt-4 md:pt-6">
                    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">

                        <p className="shrink-0 text-sm text-muted">
                            Open to new opportunities
                        </p>

                        <div className="flex flex-nowrap gap-x-5 text-sm">
                            <a
                                href="mailto:christopherperez.dev@gmail.com"
                                className="text-muted transition-colors hover:text-foreground"
                                aria-label="christopherperez.dev@gmail.com"
                            >
                                <span className="md:hidden">Email</span>
                                <span className="hidden md:inline">christopherperez.dev@gmail.com</span>
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
