import React, { useEffect, useState } from 'react';

const API_KEY = 'c46a6b08791ad9771596c0c568a670035867f226';
const FOLDER_ID = '1eNHqappzQnqOqGYRLGIF7LWpZZPvAHrE';

const DriveGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name)`
      );
      const data = await response.json();

      const imageData = data.files.map((file) => ({
        id: file.id,
        name: file.name,
        url: `https://drive.google.com/uc?export=view&id=${file.id}`,
      }));

      setImages(imageData);
    };

    fetchImages();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {images.map((img) => (
        <img
          key={img.id}
          src={img.url}
          alt={img.name}
          style={{ width: '250px', height: 'auto', borderRadius: '8px' }}
        />
      ))}
    </div>
  );
};

export default DriveGallery;
