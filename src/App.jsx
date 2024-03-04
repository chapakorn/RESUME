import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Skills from './component/Skills/Skills'
import Services from './component/Services/Services'
import Portfolio from './component/Portfolio/Portfolio'
import Number from './component/Number/Number'
import Testimonials from './component/Testimonials/Testimonials'
import Contact from './component/Contact/Contace'
import Footer from './component/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Number/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
