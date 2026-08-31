import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/ui/Button'
import LinkButton from './components/ui/LinkButton'
import Hero from './components/sections/Hero'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import TechStack from './components/sections/Techstack'
import Projects from './components/sections/Projects'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App