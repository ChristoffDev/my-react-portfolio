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
import Footer from "./components/layout/Footer";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";

const HOME_TITLE = "Christopher Perez — Lead Developer";

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
            <Footer />
        </div>
    );
}

function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        document.title = HOME_TITLE;
    }, []);

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
            <TechStack />
            <Projects />
            <Experience />
            <div className="px-6 py-20 md:px-10 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-sm font-medium tracking-[0.18em] text-muted">
                        05 / GALLERY & TESTIMONIALS
                    </h2>
                    <div className="mt-8 grid gap-16 lg:grid-cols-[0.9fr_1.15fr] lg:items-start">
                        <Gallery />
                        <Testimonials />
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
}

function NotFound() {
    useEffect(() => {
        document.title = "Page not found — Christopher Perez";
    }, []);

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
