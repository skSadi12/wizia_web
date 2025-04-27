import { useState } from 'react'

import './App.css'
import Navbarx from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarx/>
      <Hero/>
    </>
  )
}

export default App
