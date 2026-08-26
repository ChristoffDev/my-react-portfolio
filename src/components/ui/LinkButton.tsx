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
            "px-5 py-2.5 rounded-md " +
            (variant==="primary" 
                ? "bg-accent text-background" 
                : "text-foreground")
            }>
            {children}
        </a>
    );
}

export default LinkButton;