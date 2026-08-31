import { useState } from "react";


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className="px-6 py-4 mx-auto max-w-4xl">

            <div className="flex justify-between items-center">

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

                <button className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close Menu" : "Open Menu"}>
                        {menuOpen ? "✕" : "☰"}
                </button>           
                        
            </div>

            {menuOpen && (
                        <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-foreground/10">
                            <a href="#about" className="text-muted transition-colors hover:text-accent" onClick={() => setMenuOpen(false)}>About</a>
                            <a href="#stack" className="text-muted transition-colors hover:text-accent" onClick={() => setMenuOpen(false)}>Tech Stack</a>
                            <a href="#projects" className="text-muted transition-colors hover:text-accent" onClick={() => setMenuOpen(false)}>Projects</a>
                            <a href="#contact" className="text-muted transition-colors hover:text-accent" onClick={() => setMenuOpen(false)}>Contact</a>
                        </div>
                    )}

        </nav>
    )
};

export default Navbar;