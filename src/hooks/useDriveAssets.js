// src/hooks/useDriveAssets.js
import { useEffect, useState } from 'react';

const API_KEY = 'YOUR_API_KEY';
const CAROUSEL_FOLDER_ID = '1eNHqappzQnqOqGYRLGIF7LWpZZPvAHrE';
const INSTAGRAM_FILE_ID = '1VQedlNDLVwXtUeG1cKv-d7MtIv736f8H';

export const useCarouselImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/drive/v3/files?q='${CAROUSEL_FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name)`
    )
      .then((res) => res.json())
      .then((data) => {
        const imageData = data.files.map((file) => ({
          id: file.id,
          url: `https://drive.google.com/uc?export=view&id=${file.id}`,
        }));
        setImages(imageData);
      });
  }, []);

  return images;
};

export const useInstagramLinks = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/drive/v3/files/${INSTAGRAM_FILE_ID}?alt=media&key=${API_KEY}`
    )
      .then((res) => res.text())
      .then((text) => {
        const list = text
          .split('\n')
          .map((l) => l.trim())
          .filter((l) => l.startsWith('https://'));
        setLinks(list);
      });
  }, []);

  return links;
};
