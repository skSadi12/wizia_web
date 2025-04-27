import { useState } from 'react'

import './App.css'
import Navbarx from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/partners'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarx/>
      <Hero/>
      <Partners/>
    </>
  )
}

export default App
