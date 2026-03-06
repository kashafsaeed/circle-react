import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Thirdsection from './component/Thirdsection'
import Fourth from './component/fourth'
import Cards from './component/Cards'
import Seventh from './component/Seventh'

function App() {

  return (
    <>
    <Navbar />


    <Thirdsection />
    <Fourth />
    <Seventh />
    <Cards />
    
     
    </>
  )
}

export default App
