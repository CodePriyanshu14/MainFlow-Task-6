import React from 'react';
import './Image.css';

const Image = ({ image, openModal }) => {
  return (
    <img
      src={image.src}
      alt={image.alt}
      className="gallery-image"
      onClick={() => openModal(image)}
    />
  );
};

export default Image;
