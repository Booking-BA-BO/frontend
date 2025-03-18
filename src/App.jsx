import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div>
      <Card/>
      </div>
    </>
  )
}

export default App
