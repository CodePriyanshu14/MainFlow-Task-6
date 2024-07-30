import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  { src: `${process.env.PUBLIC_URL}/image1.jpg`, alt: 'Image 1' },
  { src: `${process.env.PUBLIC_URL}/image2.jpg`, alt: 'Image 2' },
  { src: `${process.env.PUBLIC_URL}/image3.jpg`, alt: 'Image 3' },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <Image key={index} image={image} openModal={openModal} />
      ))}
      {selectedImage && (
        <Modal image={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ImageGallery;
