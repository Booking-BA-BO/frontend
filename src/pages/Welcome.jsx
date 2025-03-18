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
            <div>
                <div>
                    <Galery/>
                </div>
                <div>
                    <Login/>
                </div>
            </div>
        </>
    );
};

export default Welcome;