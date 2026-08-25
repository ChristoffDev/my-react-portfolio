interface LinkButtonProps {
    text: string;
    href: string;
}

function LinkButton(props: LinkButtonProps) {
    return (
        <a href={props.href}>
            {props.text}
        </a>
    );
}

export default LinkButton;