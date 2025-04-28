import { useState } from 'react'

import './App.css'
import Navbarx from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/partners'
import Aidr from './components/Aidr'
import Train from './components/Train'
import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarx/>
      <Hero/>
      <Partners/>
      <Aidr/>
      <Train/>
      <Slider/>
    </>
  )
}

export default App
