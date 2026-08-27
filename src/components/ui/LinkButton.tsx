import type { ReactNode } from 'react';

interface LinkButtonProps {
    children: ReactNode;
    href: string;
    variant: "primary" | "secondary";
}

function LinkButton({ children, href, variant }: LinkButtonProps) {
    return (
        <a href={href}
        className={
            "px-5 py-2.5 rounded-md transition-colors focus:ring-2 focus:ring-accent " +
            (variant === "primary" 
                ? "bg-accent text-background hover:bg-accent/80" 
                : "border border-foreground/30 text-foreground hover:text-accent hover:border-accent/70")
            }>
            {children}
        </a>
    );
}

export default LinkButton;