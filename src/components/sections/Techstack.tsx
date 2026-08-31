import TechCategory from "../ui/TechCategory";

function TechStack() {

    const frontendTech = [
        "HTML",
        "JavaScript",
    ];
    const backendTech = [
        "PHP",
    ];
    const currentLearning = [
        "React",
        "TypeScript",
        "Tailwind CSS",
    ];
    const cmsTech =[
        "WordPress",
    ];
    return (
        <section id="tech" className="px-6 py-20">
            <div className="mx-auto max-w-4xl space-y-8">
                
                <h2 className="text-3xl font-bold">Tech Stack</h2>

                <TechCategory title="Frontend" technologies={frontendTech} />

                <TechCategory title="Backend" technologies={backendTech} />

                <TechCategory title="Currently Learning" technologies={currentLearning} />

                <TechCategory title="CMS" technologies={cmsTech} />



            </div>
        </section>
    );
}

export default TechStack;