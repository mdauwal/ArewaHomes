import React, { useEffect, useState } from "react";
import "./ImageGrid.css";
import { useLocation, useNavigate } from "react-router-dom";

const ImageGrid = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.images) {
      const receivedImages = location.state.images.map(image => URL.createObjectURL(image));
      setUploadedImages(receivedImages);
    }
  }, [location.state]);

  const handleDelete = (index) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e) => {
    const newImages = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const handleSubmit = () => {
    // i can post the images here
    console.log("Final pictures:", uploadedImages);
    navigate("/searchbar/aboutproperty");
  };

  return (
    <div>
      <div className="cont">
        <div className="contOne">
          <div className="adpic">Upload Images</div>
          <div className="backg cursor-pointer" onClick={() => navigate(-1)}>Back</div>
        </div>
      </div>     
      
      <div className="image-grid-container">
        <p className="mytext">
          We'd love to see images of your listing.<br/>
          You can upload up to 30 images.
        </p>
        
        <div className="image-grid">
          {uploadedImages.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`uploaded-${index}`} />
              <button
                onClick={() => handleDelete(index)}
                className="delete-btn"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

          <div className="upload-section">
           <input type="file" multiple onChange={handleImageUpload} />
           <p>Add more images</p>
         </div>
        
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Save Image & Continue
        </button>
      </div>
    </div>
  );
};

export default ImageGrid;
