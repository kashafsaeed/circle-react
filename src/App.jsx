import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Thirdsection from './component/Thirdsection'
import Fourth from './component/fourth'
import Cards from './component/Cards'
import Seventh from './component/Seventh'
import Fifth from './component/Fifth'
import Hero from './component/Hero'
import First from './component/First'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <First />

    <Thirdsection />
    <Fourth />
    <Fifth />
    <Seventh />
    <Cards />
    
     
    </>
  )
}

export default App
