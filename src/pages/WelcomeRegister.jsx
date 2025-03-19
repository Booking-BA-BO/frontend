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
    <div>
      <Galery />
    </div>
    <div>
      <Register />
    </div>
  </div>
</>

    );
};

export default WelcomeRegister;