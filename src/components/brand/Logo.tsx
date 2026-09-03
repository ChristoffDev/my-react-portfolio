interface LogoProps {
    className?: string;
}

function Logo({ className = "block h-6 w-[5.75rem]" }: LogoProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 108 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
            aria-hidden="true"
        >
            <text
                x="0"
                y="22"
                fontFamily="Instrument Sans, ui-sans-serif, system-ui, sans-serif"
                fontSize="22"
                fontWeight="600"
                letterSpacing="0.06em"
            >
                <tspan className="fill-muted">&lt;</tspan>
                <tspan className="fill-foreground">CP</tspan>
                <tspan className="fill-muted">/&gt;</tspan>
            </text>
        </svg>
    );
}

export default Logo;
