import React from 'react';

const Card = () => {
    return (
      <div className='card-container'>
        <div className='card'>
          <h3>Kártya 1</h3>
          <p>Tartalom 1</p>
        </div>
        <div>
            <button className='button'>+</button>
        </div>
      </div>
    );
  };

  export default Card;