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
import AnimatedCursor from 'react-animated-cursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimatedCursor
        innerScale={8}
        outerStyle={8}
        color='0,65,125'
        outerAlpha={0.2}
        outerScale={1.5}
        outerStyle={{
          border :"3px solid #fff",
        }}
       />
      
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
