import React, { useState } from 'react';
import './ImageUploader.css';
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handler for uploading images
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    if (images.length + files.length > 30) {
      setErrorMessage('You can upload a maximum of 30 images.');
    } else {
      setImages(prevImages => [...prevImages, ...files]);
      setErrorMessage('');
    }
  };

  // Handler for drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    
    if (images.length + files.length > 30) {
      setErrorMessage('You can upload a maximum of 30 images.');
    } else {
      setImages(prevImages => [...prevImages, ...files]);
      setErrorMessage('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    navigate("/form/previewimages", { state: { images } });
  };

  return (
    <div className="upload-page-container">
      <div className="header-container">
        <h2>Upload Images</h2>
        <span>
          <button className="back-link" onClick={() => navigate(-1)}><FaAngleLeft /> Back</button>
        </span>
      </div>

      <div className="description-container">
        <p>We'd love to see some images of your listing.<br />You can upload as many as 30 images.</p>
      </div>

      <div 
        className="upload-box" 
        onDrop={handleDrop} 
        onDragOver={handleDragOver}
      >
        <div className="upload-placeholder">
          <span className="upload-icon">🖼️</span>
          <p>Drag and drop images or</p>
          <label className="upload-button">
            <input 
              type="file" 
              multiple 
              accept="image/*"
              onChange={handleImageUpload} 
            />
            Click Here to upload from your device
          </label>
        </div>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {images.length > 0 && (
        <div className="image-preview-container">
          {images.map((image, index) => (
            <div key={index} className="image-preview">
              <img src={URL.createObjectURL(image)} alt={`preview-${index}`} />
            </div>
          ))}
        </div>
      )}

      <div className="continue-button-container">
        <button 
          className={`continue-btn ${images.length > 0 ? 'active' : ''}`} 
          disabled={images.length === 0}
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;

