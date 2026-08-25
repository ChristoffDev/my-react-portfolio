import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/ui/Button'
import LinkButton from './components/ui/LinkButton'

function App() {
  return (
    <div>
      <h1>Hi, I am Christopher.</h1>
      
      <Button text="View Projects" />
      <LinkButton text="Contact Me" href="https://example.com/contact" />
    </div>
  );
}

export default App