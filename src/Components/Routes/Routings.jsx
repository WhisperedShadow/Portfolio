import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home.jsx'
import About from '../pages/About/About.jsx'
import Education from '../pages/Education/Education.jsx'
import Skills from "../pages/Skills/Skills.jsx"
import Projects from "../pages/Projects/Projects.jsx"
import Contact from "../pages/contact/Contact.jsx"

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default Routings