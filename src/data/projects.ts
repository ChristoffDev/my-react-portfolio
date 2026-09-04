import ofdpInbox from "../assets/projects/ofdp/ofdp-developer-inbox.png";
import ofdpDeveloperLogin from "../assets/projects/ofdp/ofdp-developer-login.png";
import ofdpClientLogin from "../assets/projects/ofdp/ofdp-client-login.png";
import ofdpClientDashboard from "../assets/projects/ofdp/ofdp-client-dashboard.png";
import ofdpWorkflow from "../assets/projects/ofdp/before-vs-after-workflow.png";
import fdpDashboard from "../assets/projects/forms-datapoint/fdp-dashboard.png";
import fdpDeveloperLogin from "../assets/projects/forms-datapoint/fdp-developer-login.png";
import fdpStandaloneLogin from "../assets/projects/forms-datapoint/fdp-standalone-login.png";
import fdpSubmissionViewer from "../assets/projects/forms-datapoint/fdp-submission-viewer.png";
import fdpArchitecture from "../assets/projects/forms-datapoint/fdp-architecture.png";

export interface ProjectImage {
    src: string;
    alt: string;
}

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    lede: string;
    description: string;
    technologies: string[];
    stack: string[];
    tools: string[];
    link?: string;
    context: string;
    overview: string;
    businessProblem: string;
    impact: string;
    contributions: string[];
    notes: string[];
    images: ProjectImage[];
}

export const PROJECTS: Project[] = [
    {
        slug: "online-forms-database-panel",
        title: "Online Forms Database Panel",
        subtitle: "Role-Based Access & Privacy Enhancement",
        lede: "Enhanced an existing production system.",
        description:
            "Enhanced an internal forms management system to support separate developer and client workflows, with improved data privacy, role-based access, and compatibility with newer PHP versions.",
        technologies: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript", "jQuery"],
        stack: [
            "PHP",
            "CodeIgniter 3",
            "MySQL",
            "JavaScript",
            "jQuery",
            "HTML",
            "CSS",
            "WordPress",
        ],
        tools: ["Cursor AI", "phpMyAdmin"],
        context:
            "Internal forms management system used to collect, store, and manage form submissions from production websites.",
        overview:
            "I enhanced an existing CodeIgniter-based forms management system by introducing separate developer and client workflows, improving privacy, and supporting production environments.",
        businessProblem:
            "Developers and clients shared the same inbox, causing test submissions to appear alongside live client data and creating privacy concerns.",
        impact:
            "Separated developer and client workflows, prevented test submissions from appearing in client inboxes, improved privacy, and maintained compatibility with newer PHP versions while preserving the existing application.",
        contributions: [
            "Implemented separate logins for developers and clients.",
            "Added role-based access to separate test submissions from live client data.",
            "Improved authentication and submission workflows.",
            "Developed migration tools for existing installations.",
            "Resolved compatibility issues for newer PHP versions.",
        ],
        notes: [
            "This project involved enhancing an existing legacy CodeIgniter application that I did not originally develop. I used Cursor AI as a development assistant to better understand unfamiliar modules, explore implementation approaches, accelerate debugging, and validate ideas before integrating them into the application. I was responsible for implementing, testing, validating, and integrating the final solution into the production system.",
            "Working on this project strengthened my ability to understand legacy codebases, work within existing architectures, and deliver new features while maintaining production stability.",
        ],
        images: [
            {
                src: ofdpInbox,
                alt: "Developer inbox in the Online Forms Database Panel",
            },
            {
                src: ofdpDeveloperLogin,
                alt: "Developer login screen",
            },
            {
                src: ofdpClientLogin,
                alt: "Client login screen",
            },
            {
                src: ofdpClientDashboard,
                alt: "Client dashboard",
            },
            {
                src: ofdpWorkflow,
                alt: "Before and after workflow for developer and client paths",
            },
        ],
    },
    {
        slug: "standalone-forms-datapoint",
        title: "Standalone Forms DataPoint",
        subtitle: "Multi-Tenant Platform to Single-Site Install",
        lede: "Converted a shared platform into a standalone deployment.",
        description:
            "Converted a Laravel and Vue-based multi-tenant forms management platform into a standalone deployment model for individual client websites.",
        technologies: ["Laravel", "Vue.js", "PHP", "MySQL"],
        stack: ["Laravel", "Vue.js", "PHP", "MySQL"],
        tools: [],
        context:
            "A Laravel and Vue forms management platform originally built as a multi-tenant product for more than one client on a shared instance.",
        overview:
            "I converted that multi-tenant platform into a standalone deployment model so the same forms tools could live on an individual client website.",
        businessProblem:
            "The product assumed many clients on one platform. Individual sites needed the same forms management without the shared-tenant structure, and without rebuilding the product from scratch.",
        impact:
            "The platform can be installed on an individual client website as a standalone forms system, with its own login and submission workflow instead of a shared multi-tenant instance.",
        contributions: [
            "Standalone deployment model for a single client site.",
            "Separation from the multi-tenant setup.",
            "Client-site login and dashboard.",
            "Submission viewing for a single install.",
        ],
        notes: [
            "This work stayed inside an existing Laravel and Vue architecture. The job was to change how the application is scoped and deployed, not to replace the product.",
        ],
        images: [
            {
                src: fdpDashboard,
                alt: "Forms DataPoint dashboard",
            },
            {
                src: fdpDeveloperLogin,
                alt: "Developer login",
            },
            {
                src: fdpStandaloneLogin,
                alt: "Standalone client login",
            },
            {
                src: fdpSubmissionViewer,
                alt: "Submission viewer",
            },
            {
                src: fdpArchitecture,
                alt: "Standalone architecture overview",
            },
        ],
    },
    {
        slug: "my-react-portfolio",
        title: "My React Portfolio",
        subtitle: "Component-Based Front-End Practice",
        lede: "A personal site built while learning React.",
        description:
            "A personal portfolio built while learning React, TypeScript, and Tailwind CSS, focused on component-based development and responsive design.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        stack: ["React", "TypeScript", "Tailwind CSS"],
        tools: ["Cursor AI"],
        link: "https://github.com/ChristoffDev",
        context:
            "A personal site for presenting background, tools, and selected work, and for practicing component-based front-end development.",
        overview:
            "I designed and built the site end to end: identity, about, tech stack, project carousel, and case study pages, using React, TypeScript, and Tailwind CSS.",
        businessProblem:
            "The site needed to stay readable on phone, tablet, and laptop, and to present real work without turning into a generic developer template.",
        impact:
            "A responsive portfolio with a short home page and a separate case study for each project.",
        contributions: [
            "Component-based layout in React.",
            "Typed project data and routes in TypeScript.",
            "Responsive editorial layout with Tailwind CSS.",
            "Project carousel and case study pages.",
        ],
        notes: [
            "I used Cursor AI as a development assistant to move faster on layout, routing, and copy structure. I remained responsible for the design decisions, the implementation, and how the site reads as a whole.",
        ],
        images: [],
    },
    {
        slug: "bohol-maranatha-christian-academy-portal",
        title: "Bohol Maranatha Christian Academy Portal",
        subtitle: "School Records Behind Authentication",
        lede: "A Laravel capstone for school record management.",
        description:
            "A Laravel-based school management portal developed as a capstone project, featuring authentication, CRUD functionality, and database-driven features.",
        technologies: ["Laravel", "PHP", "MySQL", "Blade"],
        stack: ["Laravel", "PHP", "MySQL", "Blade"],
        tools: [],
        context:
            "A school management portal for Bohol Maranatha Christian Academy, developed as a capstone, to store and update school records through a signed-in web app.",
        overview:
            "I built the portal with authentication, CRUD flows, and database-backed school features in Laravel, PHP, MySQL, and Blade.",
        businessProblem:
            "The school needed a simple way to manage records online, with signed-in access and create, update, and delete work against a database.",
        impact:
            "A working school portal with login and database-backed features, delivered as a capstone rather than a production rewrite of an existing system.",
        contributions: [
            "Authentication for signed-in access.",
            "CRUD for school records.",
            "Database-driven features in MySQL.",
            "Blade views on a Laravel backend.",
        ],
        notes: [
            "This was a capstone: a full Laravel stack from auth through CRUD, built to practice keeping school data behind a web interface.",
        ],
        images: [],
    },
];

export function getProjectBySlug(slug: string) {
    return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectNumber(slug: string) {
    const index = PROJECTS.findIndex((project) => project.slug === slug);
    return index === -1 ? 0 : index + 1;
}
