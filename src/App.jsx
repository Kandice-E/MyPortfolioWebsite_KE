import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { portfolioData } from './portfolio-data'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header data={portfolioData} />
      <Hero data={portfolioData} />
      <About data={portfolioData} />
      <Skills data={portfolioData} />
      <Projects data={portfolioData} />
      <Contact data={portfolioData} />
      <Footer data={portfolioData} />
    </div>
  )
}

export default App
