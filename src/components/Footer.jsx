import React from 'react';
import '../style/Footer.css'

function Footer() {
  return (
    <footer className="footer bg-dark text-white p-4">
      <div className="container-fluid text-center">
        <p className="mb-1">© 2025 Minden jog fenntartva</p>
        <div>
          <a href="" className="text-white mx-2">Adatvédelem</a> | 
          <a href="/contact" className="text-white mx-2">Kapcsolat</a> | 
          <a href="" className="text-white mx-2">Felhasználási feltételek</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;