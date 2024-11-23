import React from 'react'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'

const App = () => {
  return (
    <div className='bg-[#282828]'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App