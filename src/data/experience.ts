export interface ExperienceEntry {
    period: string;
    role: string;
    company?: string;
    summary: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
    {
        period: "September 16, 2026 — Present",
        role: "Assistant Supervisor",
        company: "Proweaver, Inc.",
        summary:
            "Recently promoted from Lead Developer to Assistant Supervisor; currently transitioning into the role while continuing to build on my experience in technical leadership and hands-on production work.",
    },
    {
        period: "August 16, 2025 — September 15, 2026",
        role: "Lead Developer",
        company: "Proweaver, Inc.",
        summary:
            "Lead and coordinate a team of 12 developers while remaining hands-on with forms implementation, website development, troubleshooting, and production support.",
    },
    {
        period: "January 2024 — August 15, 2025",
        role: "Web Developer",
        company: "Proweaver, Inc.",
        summary:
            "Implemented and supported website forms across hundreds of production websites, working with PHP, WordPress, JavaScript, jQuery, MySQL, and various form platforms.",
    },
];

export const CAREER_PROGRESSION = {
    label: "Career Progression",
    path: "Web Developer → Lead Developer → Assistant Supervisor",
    period: "January 2024 → September 16, 2026",
};

export const EDUCATION = {
    label: "Education",
    degree: "Bachelor of Science in Information Technology",
    school: "Trinidad Municipal College",
    period: "2019 — 2023",
    note: "Capstone: Bohol Maranatha Christian Academy Portal",
};
