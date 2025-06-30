// src/components/CarouselDrive.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// ✅ Import all local images manually
import female1 from '../images/keune/female1.jpg';
import female2 from '../images/keune/female2.jpg';
import female3 from '../images/keune/female3.jpg';
import female4 from '../images/keune/female4.jpg';
import female5 from '../images/keune/female5.png';
import female6 from '../images/keune/female6.jpg';
import female7 from '../images/keune/female7.jpg';
import female8 from '../images/keune/female8.jpg';
import female9 from '../images/keune/female9.jpg';

const localImages = [
  female1,
  female2,
  female3,
  female4,
  female5,
  female6,
  female7,
  female8,
  female9,
];

function CarouselDrive({ height = '450px', borderRadius = '16px' }) {
  return (
    <Carousel fade indicators={false} interval={4000}>
      {localImages.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={img}
            alt={`Keune Carousel ${index + 1}`}
            style={{
              height: height,
              objectFit: 'cover',
              borderRadius: borderRadius,
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselDrive;
