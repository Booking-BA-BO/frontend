/* import { useState } from 'react' */
import './App.css'
import Header from './components/Header'
import Galery from './components/Galery'
import Login from './components/Login'

export default function App() {

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

