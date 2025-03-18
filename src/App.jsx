import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Galery from './components/Galery'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Home /> : <Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  /*   return (
    <>
      <Header/>
      <div>
      <Card/>
      </div>
    </>
  ) */
}
