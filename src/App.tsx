import { useEffect } from "react";
import { Link, Outlet, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import TechStack from "./components/sections/Techstack";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Layout() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <ScrollToTop />
            <Navbar />
            <Outlet />
        </div>
    );
}

function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            return;
        }

        const id = hash.slice(1);
        const el = document.getElementById(id);
        el?.scrollIntoView();
    }, [hash]);

    return (
        <>
            <Hero />
            <About />
            <div className="px-6 py-20 md:px-10 md:py-24">
                <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.15fr] lg:items-start">
                    <TechStack />
                    <Projects />
                </div>
            </div>
            <Experience />
            <div className="px-6 py-20 md:px-10 md:py-24">
                <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.15fr] lg:items-start">
                    <Gallery />
                    <Testimonials />
                </div>
            </div>
            <Contact />
        </>
    );
}

function NotFound() {
    return (
        <main className="px-6 py-20 md:px-10 md:py-24">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm text-muted">This page could not be found.</p>
                <Link
                    to="/"
                    className="mt-6 inline-block text-sm text-muted transition-colors hover:text-foreground"
                >
                    ← Back home
                </Link>
            </div>
        </main>
    );
}

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
