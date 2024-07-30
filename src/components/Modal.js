import React from 'react';
import './Modal.css';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <span className="close">&times;</span>
      <img className="modal-content" src={image.src} alt={image.alt} />
      <div className="caption">{image.alt}</div>
    </div>
  );
};

export default Modal;
