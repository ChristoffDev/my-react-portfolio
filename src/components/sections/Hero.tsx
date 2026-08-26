
import LinkButton from "../ui/LinkButton"


function Hero() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-4xl flex flex-col gap-8">

                <div className="space-y-2">
                    <h1 className="text-4xl font-bold  leading-tight md:text-6xl">Christopher Perez</h1>
                    <p className="text-lg text-muted">Lead Developer | Web Developer</p>
                </div>

                <p className="text-lg text-muted max-w-2xl">I build and support production web solutions, with a focus on forms development, website implementation, and solving technical problems.</p>

                <div className="flex gap-4 items-center">
                    <LinkButton href="#projects" variant="primary">
                        View Projects
                    </LinkButton>
                    <LinkButton href="#contact" variant="secondary">
                        Contact Me
                    </LinkButton>
                </div>

            </div>
        </section>
    )
};

export default Hero