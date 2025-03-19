import React, { useState, useEffect } from 'react';

const Gallery = () => {
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
  }, [images.length]);

  const styles = {
    carouselImage: {
      width: '100%',
      margin: '100px',
      padding: '50px',
      maxWidth: '750px'
    },
  };

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
              alt={`Animation ${index}`}
              style={styles.carouselImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;