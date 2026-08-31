interface TechBadgeProps {
    name: string;
}

function TechBadge({ name }: TechBadgeProps) {
    return(
        <span className="px-4 py-2 rounded-md border border-foreground/20 text-muted">
            {name}
        </span>

    );
}

export default TechBadge;