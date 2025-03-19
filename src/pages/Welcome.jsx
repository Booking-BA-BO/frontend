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
  <div className="grid-container" style={{ display: 'flex', alignItems: 'stretch' }}>
  <div className="galery" style={{ flex: 1 }}>
    <Galery />
  </div>
  <div className="login" style={{ flex: 1 }}>
    <Login />
  </div>
</div>
</>



    );
};

export default Welcome;