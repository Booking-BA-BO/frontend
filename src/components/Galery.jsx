import React, { useState, useEffect } from 'react';

const Galery = () => {
  const images = [
    '/images/v1.jpg',
    '/images/v2.jpg',
    '/images/v3.jpg',
    '/images/v4.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}
          >
            <img
              src={image}
              className="d-block w-50 p-3"
              alt={`Animation ${index}`}
              style={{ width: '100px' , objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;
