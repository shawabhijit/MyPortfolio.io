import { useState } from 'react'
import Header from './components/Header'
import ButtonGradient from './assets/svg/ButtonGradient';
import Hero from './components/Hero';
import Projects from './components/Projects';
import FloatingNav from './components/FloatingNav';
import { FaHome } from 'react-icons/fa';
import About from './components/About';


function App() {
  

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        {/* <FloatingNav navItems={[
          {name: 'ABOUT', link:'/'},
          {name:'PROJECTS',link:'/'},
          {name:'EXPERINCE',link:'/'},
          {name:'CONTACT ME', link:'/'}
        ]} /> */}
        <Hero />
        <About />
        <Projects />
      </div>

      <ButtonGradient />
    </>
  )
}

export default App
