import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const ImageCarousel = ({ images, caroHeight="600px", showLeftArr=true, showRightArr=true, showButton=true }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`relative w-full`} style={{height:`${caroHeight}`}}>
      {/* Image */}
      <div className={`h-full w-full`} >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left arrow */}
      <div
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer ${showLeftArr ? "":"hidden"}`}
        onClick={prevImage}
      >
        <FaChevronLeft size={32} />
      </div>

      {/* Right arrow */}
      <div
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer ${showRightArr ? "":"hidden"}`}
        onClick={nextImage}
      >
        <FaChevronRight size={32} />
      </div>
      <div>
        <button className={`w-full p-3 bg-black text-white ${showButton ? "":"hidden"}`} onClick={()=>console.log("send images to a page")}>See all pictures</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
