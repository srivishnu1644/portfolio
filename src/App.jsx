//import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Achievements from './components/Achievements/Achievements'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
