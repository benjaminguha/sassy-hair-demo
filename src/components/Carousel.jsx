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
import sassy1 from "../images/sassy/sassy1.jpg";
import sassy2 from "../images/sassy/sassy2.jpg";
import sassy4 from "../images/sassy/sassy4.jpg";
import sassy5 from "../images/sassy/sassy5.jpg";

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
  sassy1,
  sassy2,
  sassy4,
  sassy5,
];

function CarouselDrive({ height = '450px', borderRadius = '16px' }) {
  const shuffled = [...localImages].sort(() => Math.random() - 0.5);

  return (
    <Carousel fade indicators={false} interval={4000}>
      {shuffled.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={img}
            alt={`Keune Carousel ${index + 1}`}
            style={{
              height: height,
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: borderRadius,
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}


export default CarouselDrive;
