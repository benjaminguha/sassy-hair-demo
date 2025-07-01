// src/components/CarouselDrive.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Automatically import all images from /images/carousel
const carouselImages = import.meta.glob('../images/carousel/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const localImages = Object.values(carouselImages);

function CarouselDrive({ height = '450px', borderRadius = '16px' }) {
  const shuffled = [...localImages].sort(() => Math.random() - 0.5);

  return (
    <Carousel fade indicators={false} interval={4000}>
      {shuffled.map((img, index) => (
        <Carousel.Item key={index}>
          <picture>
            {/* Add WebP support if you're using vite-imagetools */}
            {/* Example: <source srcSet={imgWebp} type="image/webp" /> */}

            <img
              className="d-block w-100"
              src={img}
              loading={index === 0 ? 'eager' : 'lazy'} // Preload first image
              fetchpriority={index === 0 ? 'high' : 'low'}
              alt={`Carousel image ${index + 1}`}
              style={{
                height,
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius,
                aspectRatio: '16/9', // Optional: prevents layout shift
              }}
            />
          </picture>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselDrive;
