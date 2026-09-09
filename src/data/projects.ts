import ofdpWorkflow from "../assets/projects/ofdp/before-vs-after-workflow.png";
import fdpArchitecture from "../assets/projects/forms-datapoint/fdp-architecture.png";
import portfolioHome from "../assets/projects/react-portfolio/home-portfolio.png";
import hbdCurtain from "../assets/projects/hbd-cake/hbd-cake-screenshot-1.jpeg";
import hbdCake from "../assets/projects/hbd-cake/hbd-cake-screenshot-2.jpeg";
import bmcaLogin from "../assets/projects/bmca/bmca-login.png";
import bmcaDashboard from "../assets/projects/bmca/dashboard.png";
import bmcaStudents from "../assets/projects/bmca/students.png";
import bmcaTeachers from "../assets/projects/bmca/teacher.png";
import bmcaClasses from "../assets/projects/bmca/class.png";
import bmcaSubjects from "../assets/projects/bmca/subjects.png";

export interface ProjectImage {
    src: string;
    alt: string;
}

export interface ProjectPoster {
    title: string;
    subtitle: string;
    stack: string;
    status: string;
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
    repo?: string;
    context: string;
    overview: string;
    businessProblem: string;
    impact: string;
    contributions: string[];
    notes: string[];
    images: ProjectImage[];
    nda?: boolean;
    ndaLabel?: string;
    ongoing?: boolean;
    poster?: ProjectPoster;
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
        nda: true,
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
            "Product screenshots are withheld under NDA. The diagram below describes the architecture.",
            "This project involved enhancing an existing legacy CodeIgniter application that I did not originally develop. I used Cursor AI as a development assistant to better understand unfamiliar modules, explore implementation approaches, accelerate debugging, and validate ideas before integrating them into the application. I was responsible for implementing, testing, validating, and integrating the final solution into the production system.",
            "Working on this project strengthened my ability to understand legacy codebases, work within existing architectures, and deliver new features while maintaining production stability.",
        ],
        images: [
            {
                src: ofdpWorkflow,
                alt: "Before and after workflow for developer and client paths",
            },
        ],
    },
    {
        slug: "ai-assisted-form-conversion-workflow",
        title: "AI-Assisted Form Conversion Workflow",
        subtitle: "Professional Project · Internal Development Initiative",
        lede: "A structured AI-assisted workflow for faster form conversion.",
        description:
            "A structured AI-assisted development workflow created with fellow developers to speed up the conversion of online forms using Cursor, standardized prompts, reference files, and development guidelines.",
        technologies: [
            "Cursor AI",
            "PHP",
            "JavaScript",
            "jQuery",
            "HTML",
            "CSS",
        ],
        stack: [
            "Cursor AI",
            "PHP",
            "JavaScript",
            "jQuery",
            "HTML",
            "CSS",
        ],
        tools: [
            "Git",
            "Existing form development platform",
            "Reference/sample files",
            "Structured AI prompts",
        ],
        nda: true,
        ndaLabel: "INTERNAL · CONFIDENTIAL",
        poster: {
            title: "AI FORM WORKFLOW",
            subtitle: "Internal Development Initiative",
            stack: "Cursor · PHP · JavaScript",
            status: "INTERNAL · PROFESSIONAL PROJECT",
        },
        context:
            "Form conversion was a repetitive development task that required significant time from developers. I collaborated with fellow developers to create a structured AI-assisted workflow using Cursor to make the conversion process faster and more efficient.",
        overview:
            "The workflow provides Cursor with standardized prompts, sample/reference files, and development guidelines to help developers work through the form conversion process more quickly and consistently. It gives the AI the necessary context and instructions to assist with repetitive conversion work rather than requiring developers to manually perform every step from the beginning.",
        businessProblem:
            "Converting online forms involved repetitive implementation work and could take a significant amount of developer time. The team wanted to reduce the time spent on repetitive conversion tasks while maintaining developer review and validation.",
       impact:
            "The workflow made repetitive form conversion work faster for developers and provided a more structured and repeatable approach to AI-assisted development, while keeping developer review and validation as part of the process.",
        contributions: [
            "Collaborated with developers to design a structured AI-assisted form conversion workflow.",
            "Created and refined prompts used to guide Cursor through the conversion process.",
            "Prepared sample/reference files to provide consistent context for AI-assisted development.",
            "Established development guidelines to help maintain consistent implementation.",
            "Tested and refined the workflow based on actual form conversion requirements.",
            "Helped improve the speed of repetitive form conversion work for developers.",
            "Maintained developer review and validation as part of the conversion process.",
        ],
        notes: [
            "This is an internal professional project. The actual prompts, sample files, guidelines, and internal development materials are not publicly shown due to the confidential nature of the project.",
            "This case study focuses on the development workflow, my contributions, and the problem-solving approach rather than exposing proprietary company materials.",
        ],
        images: [],
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
        nda: true,
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
            "Product screenshots are withheld under NDA. The diagram below describes the architecture.",
            "This work stayed inside an existing Laravel and Vue architecture. The job was to change how the application is scoped and deployed, not to replace the product.",
        ],
        images: [
            {
                src: fdpArchitecture,
                alt: "Standalone architecture overview",
            },
        ],
    },    
    {
        slug: "formsflow",
        title: "FormsFlow",
        subtitle: "Professional Project · Ongoing",
        lede: "A forms management platform developed to simplify form configuration, data management, and deployment across client websites.",
        description:
            "A forms management platform developed to simplify form configuration, data management, and deployment across client websites.",
        technologies: ["Laravel", "Vue.js", "PHP", "MySQL"],
        stack: ["Laravel", "Vue.js", "PHP", "MySQL"],
        tools: [],
        ongoing: true,
        poster: {
            title: "FORMSFLOW",
            subtitle: "Forms Management Platform",
            stack: "Laravel · Vue · PHP · MySQL",
            status: "ONGOING · PROFESSIONAL PROJECT",
        },
        context:
            "A forms management platform for configuring forms, managing collected data, and deploying them to client websites.",
        overview:
            "I am implementing and improving the forms management workflow with Laravel and Vue. The work is in progress, so this page describes current effort rather than a finished product.",
        businessProblem:
            "The project aims to provide a more practical way to configure forms, manage collected data, and deploy forms across individual client websites.",
        impact: "",
        contributions: [
            "Implementing and improving the forms management workflow",
            "Working with Laravel and Vue",
            "Developing backend APIs and frontend functionality",
            "Improving deployment and client-site configuration",
        ],
        notes: [
            "Due to the confidential nature of the project, system screenshots and architecture details are not shown. This case study focuses on my role, technical contributions, and development experience.",
        ],
        images: [],
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
        link: "https://christoffdev.vercel.app",
        repo: "https://github.com/ChristoffDev/my-react-portfolio",
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
        images: [
            {
                src: portfolioHome,
                alt: "Home page of the React portfolio",
            },
        ],
    },
    {
        slug: "birthday-cake",
        title: "Birthday Cake",
        subtitle: "Interactive Front-End Experience",
        lede: "A playful interactive web experience built as a personal frontend project.",
        description:
            "A playful interactive web experience built with React and Vite, combining animations, interactive scenes, and responsive design.",
        technologies: ["React", "Vite", "JavaScript", "CSS"],
        stack: ["React", "Vite", "JavaScript", "CSS"],
        tools: ["Git"],
        link: "https://birthday-cake-five-jade.vercel.app",
        repo: "https://github.com/ChristoffDev/hbd-cake-2",
        context:
            "An interactive birthday-themed web experience created as a frontend project to explore animations, user interactions, and responsive design.",
        overview:
            "I designed and built an interactive birthday experience with a guided sequence of scenes, including a curtain opening, interactive candles, a celebration sequence, and a final message scene.",
        businessProblem:
            "A simple static greeting would not provide the interactive experience I wanted. The project was designed around a clear sequence of interactions that could be experienced easily on both desktop and mobile devices.",
        impact:
            "A complete interactive birthday experience with a guided beginning-to-end flow, responsive layout, animations, and a public demo version.",
        contributions: [
            "Designed and implemented the interactive experience.",
            "Built the curtain opening interaction.",
            "Implemented the interactive candle sequence.",
            "Added the celebration/confetti interaction.",
            "Created the final message scene.",
            "Structured the project using reusable React components.",
            "Implemented responsive behavior for different screen sizes.",
            "Prepared a sanitized public version for portfolio demonstration.",
        ],
        notes: [
            "This is a personal frontend project.",
            "The public version is a sanitized recreation of the original private project.",
            "Personal photos and private messages from the original version are not included.",
            "The project is intended to demonstrate frontend development, interactive UI, animation, and responsive design.",
        ],
        images: [
            {
                src: hbdCurtain,
                alt: "Opening screen with closed curtains and a pull cord",
            },
            {
                src: hbdCake,
                alt: "Birthday cake with lit candles and an interactive prompt",
            },
        ],
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
        images: [
            {
                src: bmcaLogin,
                alt: "BMCA School Portal login screen with User ID and password fields",
            },
            {
                src: bmcaDashboard,
                alt: "Admin dashboard with student and teacher summary cards",
            },
            {
                src: bmcaStudents,
                alt: "Students list with search filters and edit and delete actions",
            },
            {
                src: bmcaTeachers,
                alt: "Teachers list with search filters and CRUD actions",
            },
            {
                src: bmcaClasses,
                alt: "Classes list with search, status, and edit and delete actions",
            },
            {
                src: bmcaSubjects,
                alt: "Subjects list with subject codes and CRUD actions",
            },
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectNumber(slug: string) {
    const index = PROJECTS.findIndex((project) => project.slug === slug);
    return index === -1 ? 0 : index + 1;
}
