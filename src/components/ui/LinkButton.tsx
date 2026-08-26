import type { ReactNode } from 'react';

interface LinkButtonProps {
    children: ReactNode;
    href: string;
}

function LinkButton({ children, href }: LinkButtonProps) {
    return (
        <a href={href}>
            {children}
        </a>
    );
}

export default LinkButton;