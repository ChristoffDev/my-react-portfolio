

function Navbar() {
    return (
        <nav className="px-6 py-4 mx-auto max-w-4xl flex justify-between items-center">
            <div className="font-semibold">
                Christopher Perez
            </div>

            <div className="hidden md:flex gap-5 ">
                <a href="#about" className="text-muted transition-colors hover:text-accent"
                >
                    About
                </a>

                <a href="#stack" className="text-muted transition-colors hover:text-accent"
                >
                    Tech Stack
                </a>

                <a href="#projects" className="text-muted transition-colors hover:text-accent"
                >
                    Projects
                </a>

                <a href="#contact" className="text-muted transition-colors hover:text-accent">
                    Contact
                </a>
            </div>
        </nav>
    )
};

export default Navbar;