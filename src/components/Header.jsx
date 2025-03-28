import React, { useContext } from 'react';
import '../style/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../Context/AppContext';
import HamburgerProfile from './HamburgerProfile';

const Header = () => {
  const { user } = useContext(AppContext);
  

  return (
    <header className="header">
      <div className='header-background'>
        <div className='headerLeft'>
        <h1>BookIT</h1>
        </div>
        <div className='headerRight'>
        {/* <a href="/login" className='login'><h5>Bejelentkezés</h5></a> */}
        {user ? <HamburgerProfile /> : <a href="/login" className='login'><h5>Bejelentkezés</h5></a>}
        </div>
      </div>
    </header> 
  );
};

export default Header;
