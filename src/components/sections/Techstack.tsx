import TechIcon from "../ui/TechIcon";

type TechItem = {
    name: string;
    use: string;
};

type TechGroup = {
    title: string;
    items: TechItem[];
};

const GROUPS: TechGroup[] = [
    {
        title: "Frontend",
        items: [
            { name: "HTML", use: "Page structure" },
            { name: "CSS", use: "Styling and layout" },
            { name: "JavaScript", use: "Interface behavior" },
            { name: "jQuery", use: "DOM interactions" },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "PHP", use: "Server-side development" },
        ],
    },
    {
        title: "Database",
        items: [
            { name: "MySQL", use: "Data storage" },
            { name: "phpMyAdmin", use: "Database management" },
        ],
    },
    {
        title: "CMS",
        items: [
            { name: "WordPress", use: "Content management" },
        ],
    },
    {
        title: "Forms",
        items: [
            { name: "Forms Platform", use: "Forms development" },
            { name: "WPForms", use: "WordPress forms" },
            { name: "Contact Form 7", use: "WordPress forms" },
            { name: "Jotform", use: "Form implementation" },
        ],
    },
    {
        title: "Currently learning",
        items: [
            { name: "React", use: "Component-based UI" },
            { name: "TypeScript", use: "Typed JavaScript" },
            { name: "Tailwind CSS", use: "Utility-first styling" },
        ],
    },
];

function TechStack() {
    return (
        <section id="stack" className="px-6 py-20 md:px-10 md:py-24">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-sm font-medium tracking-[0.18em] text-muted">
                    02 / TECH STACK
                </h2>

                <div className="mt-8 space-y-8">
                    {GROUPS.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-xs font-medium tracking-[0.16em] text-light-ink">
                                {group.title.toUpperCase()}
                            </h3>
                            <ul className="mt-4 space-y-4">
                                {group.items.map((item) => (
                                    <li key={item.name} className="flex items-start gap-3">
                                        <TechIcon name={item.name} />
                                        <div>
                                            <p className="text-sm font-medium tracking-[0.12em]">
                                                {item.name.toUpperCase()}
                                            </p>
                                            <p className="text-sm text-muted">{item.use}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;
