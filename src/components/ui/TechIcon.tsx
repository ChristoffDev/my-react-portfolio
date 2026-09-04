import type { ReactElement } from "react";

interface TechIconProps {
    name: string;
}

function TechIcon({ name }: TechIconProps) {
    const Icon = ICONS[name] ?? FallbackIcon;

    return (
        <span className="flex size-6 shrink-0 items-center justify-center text-foreground" aria-hidden="true">
            <Icon />
        </span>
    );
}

function FallbackIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4.5" y="4.5" width="15" height="15" stroke="currentColor" strokeWidth="1.25" />
        </svg>
    );
}

function HtmlIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M8 7.5 3.5 12 8 16.5M16 7.5 20.5 12 16 16.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function JavaScriptIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M9 7c-2.2 0-3.5 1.2-3.5 3.25v3.5C5.5 15.8 6.8 17 9 17M15 7c2.2 0 3.5 1.2 3.5 3.25v3.5C18.5 15.8 17.2 17 15 17"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );
}

function PhpIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="12" rx="9" ry="5.5" stroke="currentColor" strokeWidth="1.25" />
            <path
                d="M7.25 12h2.1a1.15 1.15 0 1 0 0-2.3H8.1v4.6M12.4 9.7v4.6M12.4 12h1.55a1.15 1.15 0 1 0 0-2.3H12.4M16.85 9.7v4.6"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function WordPressIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.25" />
            <path
                d="M8 15.5 12 8.5l4 7M9.25 13h5.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ReactIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="1.35" fill="currentColor" />
            <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.25" />
            <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.6"
                stroke="currentColor"
                strokeWidth="1.25"
                transform="rotate(60 12 12)"
            />
            <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.6"
                stroke="currentColor"
                strokeWidth="1.25"
                transform="rotate(120 12 12)"
            />
        </svg>
    );
}

function TypeScriptIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4.5" y="4.5" width="15" height="15" stroke="currentColor" strokeWidth="1.25" />
            <path
                d="M8 10.5h8M12 10.5V17"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );
}

function TailwindIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M4.5 14c1.8-4 4.2-6 7.5-6 5 0 5 6 10 6-1.8 4-4.2 6-7.5 6-5 0-5-6-10-6Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CssIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M6 6h12l-1.2 12.5L12 20.5 7.2 18.5 6 6Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinejoin="round"
            />
            <path
                d="M9 10h6.5M9.4 14h5.2"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );
}

function JqueryIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M5 15.5c3.5 3 8.5 3 12 0M6.5 12c3 2.4 7 2.4 10 0M8 8.5c2.2 1.6 5.3 1.6 7.5 0"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );
}

function MysqlIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="7.5" rx="7.5" ry="2.5" stroke="currentColor" strokeWidth="1.25" />
            <path
                d="M4.5 7.5v9c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-9"
                stroke="currentColor"
                strokeWidth="1.25"
            />
        </svg>
    );
}

function PhpMyAdminIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4.5" y="5" width="15" height="14" stroke="currentColor" strokeWidth="1.25" />
            <path
                d="M4.5 9h15M8 5v14M11.5 12.5h5M11.5 15.5h3.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );
}

function FormIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="4.5" width="14" height="15" stroke="currentColor" strokeWidth="1.25" />
            <path
                d="M8 9h8M8 12.5h8M8 16h5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );
}

function WpFormsIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.25" />
            <path
                d="M8 9.5h8M8 12.5h8M8 15.5h5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ContactFormIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4.5" y="6" width="15" height="12" stroke="currentColor" strokeWidth="1.25" />
            <path
                d="M5 7.5 12 12.5 19 7.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function JotformIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M7 5.5h10M12 5.5v13M8.5 18.5H12"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );
}

const ICONS: Record<string, () => ReactElement> = {
    HTML: HtmlIcon,
    CSS: CssIcon,
    JavaScript: JavaScriptIcon,
    jQuery: JqueryIcon,
    PHP: PhpIcon,
    MySQL: MysqlIcon,
    phpMyAdmin: PhpMyAdminIcon,
    WordPress: WordPressIcon,
    "Forms Platform": FormIcon,
    WPForms: WpFormsIcon,
    "Contact Form 7": ContactFormIcon,
    Jotform: JotformIcon,
    React: ReactIcon,
    TypeScript: TypeScriptIcon,
    "Tailwind CSS": TailwindIcon,
};

export default TechIcon;
