import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Galery from './components/Galery'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='loginsite'>
        <Galery />
        <Login/>
      </div>
    </>
  )
}

export default App
