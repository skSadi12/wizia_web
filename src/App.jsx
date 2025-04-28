import { useState } from 'react'

import './App.css'
import Navbarx from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/partners'
import Aidr from './components/Aidr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarx/>
      <Hero/>
      <Partners/>
      <Aidr/>
    </>
  )
}

export default App
