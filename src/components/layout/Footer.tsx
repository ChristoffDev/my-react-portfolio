function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border px-6 py-6 md:px-10">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
                <p className="text-xs font-mono text-muted">
                    © {year} Christopher Perez
                </p>
                <button
                    type="button"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                    onClick={() => window.scrollTo({ top: 0 })}
                >
                    Back to top ↑
                </button>
            </div>
        </footer>
    );
}

export default Footer;
