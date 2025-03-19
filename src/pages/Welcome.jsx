import React from 'react';
import Galery from '../components/Galery';
import Login from '../components/Login';
import Header from '../components/Header';

const Welcome = () => {
    return(
<>
  <div>
    <Header />
  </div>
  <div className="grid-container">
    <div className="galery">
      <Galery />
    </div>
    <div className="login">
      <Login />
    </div>
  </div>
</>



    );
};

export default Welcome;