export interface ExperienceEntry {
    period: string;
    role: string;
    company?: string;
    summary: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
    {
        period: "August 16, 2025 — Present",
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
    path: "Web Developer → Lead Developer",
    period: "January 2024 → August 16, 2025",
};

export const EDUCATION = {
    label: "Education",
    degree: "Bachelor of Science in Information Technology",
    school: "Trinidad Municipal College",
    period: "2019 — 2023",
    note: "Capstone: Bohol Maranatha Christian Academy Portal",
};
