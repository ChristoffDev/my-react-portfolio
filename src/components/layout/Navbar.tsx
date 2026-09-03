import { useEffect, useId, useState } from "react";
import Logo from "../brand/Logo";

const NAV_LINKS = [
    { href: "#about", label: "About", id: "about" },
    { href: "#stack", label: "Tech Stack", id: "stack" },
    { href: "#projects", label: "Project", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
] as const;

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState("");
    const menuId = useId();

    useEffect(() => {
        const sections = NAV_LINKS
            .map((link) => document.getElementById(link.id))
            .filter((el): el is HTMLElement => el !== null);

        if (sections.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible[0]?.target.id) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -55% 0px",
                threshold: [0, 0.25, 0.5, 1],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        const onChange = () => {
            if (mediaQuery.matches) {
                setMenuOpen(false);
            }
        };

        mediaQuery.addEventListener("change", onChange);
        return () => mediaQuery.removeEventListener("change", onChange);
    }, []);

    const renderLinks = (onNavigate?: () => void, className = "") => (
        <ul className={className}>
            {NAV_LINKS.map((link) => {
                const isActive = activeId === link.id;

                return (
                    <li key={link.id}>
                        <a
                            href={link.href}
                            className={
                                "text-sm tracking-wide transition-colors duration-200 " +
                                (isActive
                                    ? "font-medium text-foreground"
                                    : "text-muted hover:text-foreground")
                            }
                            aria-current={isActive ? "page" : undefined}
                            onClick={onNavigate}
                        >
                            {link.label}
                        </a>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background">
            <nav className="mx-auto max-w-6xl px-6 py-5 md:px-10" aria-label="Primary">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-foreground" aria-label="Christopher Perez">
                        <Logo />
                    </a>

                    {renderLinks(undefined, "hidden items-center gap-8 md:flex")}

                    <button
                        type="button"
                        className="text-foreground md:hidden"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls={menuId}
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

                <div
                    id={menuId}
                    hidden={!menuOpen}
                    className="mt-4 border-t border-border pt-4 md:hidden"
                >
                    {renderLinks(() => setMenuOpen(false), "flex flex-col gap-4")}
                </div>
            </nav>
        </header>
    );
}

function MenuIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.25" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.25" />
        </svg>
    );
}

export default Navbar;
