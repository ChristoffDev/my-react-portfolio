import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/ui/Button'
import LinkButton from './components/ui/LinkButton'
import Hero from './components/sections/Hero'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
    </div>
  );
}

export default App