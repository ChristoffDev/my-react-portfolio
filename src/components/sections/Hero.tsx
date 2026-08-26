
import LinkButton from "../ui/LinkButton"


function Hero() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-4xl">
                <h1>Christopher Perez</h1>
                <p>Lead Developer | Web Developer</p>
                <p>I build and support production web solutions, with a focus on forms development, website implementation, and solving technical problems.</p>
                <div className="flex gap-4 items-center">
                    <LinkButton href="#projects">
                        View Projects
                    </LinkButton>
                    <LinkButton href="#contact">
                        Contact Me
                    </LinkButton>
                </div>
            </div>
        </section>
    )
};

export default Hero