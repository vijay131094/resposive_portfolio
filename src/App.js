import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'

const App = () => {
  return (
    <div className='app'>
    <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Testimonial/>
      <Skills/>
      <Footer/>


    </div>
  )
}

export default App