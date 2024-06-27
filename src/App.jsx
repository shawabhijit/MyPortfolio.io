import { useState } from 'react'
import Header from './components/Header'
import ButtonGradient from './assets/svg/ButtonGradient';
import Hero from './components/Hero';
import Projects from './components/Projects';


function App() {
  

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Projects />
      </div>

      <ButtonGradient />
    </>
  )
}

export default App
