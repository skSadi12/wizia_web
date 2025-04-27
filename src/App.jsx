import { useState } from 'react'

import './App.css'
import Navbarx from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarx/>
    </>
  )
}

export default App
