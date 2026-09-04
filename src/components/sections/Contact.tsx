function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-border px-6 py-20 md:px-10 md:py-24"
        >
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
                <div className="flex flex-col gap-6">
                    <p className="text-sm font-medium tracking-[0.18em] text-muted">
                        06 / CONTACT
                    </p>
                    <h2 className="font-serif text-3xl leading-snug tracking-tight md:text-4xl">
                        Let's work together.
                    </h2>
                    <p className="max-w-2xl text-lg leading-relaxed text-muted">
                        I'm open to opportunities where I can contribute my
                        experience in web development, production support,
                        and technical leadership while continuing to grow
                        as a developer.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <a
                        href="mailto:christopherperez.dev@gmail.com"
                        className="text-lg text-foreground transition-opacity hover:opacity-80"
                    >
                        christopherperez.dev@gmail.com
                    </a>
                    <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
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
                            Resume →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
