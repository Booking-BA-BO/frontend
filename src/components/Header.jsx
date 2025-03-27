import React, { useContext } from 'react';
import '../style/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../Context/AppContext';

const Header = () => {
  const { user } = useContext(AppContext);
  

  return (
    <header className="header">
      <div className='header-background'>
        <div className='headerLeft'>
        <h1>BookIT</h1>
        </div>
        <div className='headerMid'>
        <a href="#"><h5>Felfedezés</h5></a>
        <a href="#"><h5>Kontakt</h5></a>
        <a href="#"><h5>FAQs</h5></a>
        </div>
        <div className='headerRight'>
        {/* <a href="/login" className='login'><h5>Bejelentkezés</h5></a> */}
        {user ? <h5>Kijelentkezés</h5> : <a href="/login" className='login'><h5>Bejelentkezés</h5></a>}
        </div>
      </div>
    </header> 
  );
};

export default Header;
