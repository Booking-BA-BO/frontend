import React, { useState } from 'react'
import NewForm from './NewForm';

function PlusCardComponent() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const showPopup = () => {
        setPopupVisible(true);
      };
    
      const closePopup = () => {
        setPopupVisible(false);
      };

  return (
    <div className="plus-card">
    <div>
      <button className="plus" onClick={showPopup}>
        +
      </button>
      {isPopupVisible && (
        <>
          <div className="overlay active" onClick={closePopup}></div>
          <div className="popup">
            <button className="close-new-form" onClick={closePopup}>
              x
            </button>
            <div>
              <NewForm />
            </div>
          </div>
        </>
      )}
    </div>
  </div>
  )
}

export default PlusCardComponent