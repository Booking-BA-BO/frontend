import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4 w-100">
      <div className="container-fluid text-center">
        <p className="mb-1">© 2025 Minden jog fenntartva</p>
        <div>
          <a href="#" className="text-white mx-2">Adatvédelem</a> | 
          <a href="#" className="text-white mx-2">Kapcsolat</a> | 
          <a href="#" className="text-white mx-2">Felhasználási feltételek</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
