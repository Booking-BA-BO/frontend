import React from 'react';
import Galery from '../components/Galery';
import Header from '../components/Header';
import Register from '../components/Register';

const WelcomeRegister = () => {
    return(
<>
  <div>
    <Header />
  </div>
  <div className="d-flex justify-content-between">
    <div className="w-50 pe-3">
      <Galery />
    </div>
    <div className="w-50 ps-3">
      <Register />
    </div>
  </div>
</>

    );
};

export default WelcomeRegister;