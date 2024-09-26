import React from 'react'
import video1 from '../assets/first3dmodel.mp4';
// import video1 from '../assets/model3.mp4';

const Model3d = () => {
    const url = "https://storage.googleapis.com/eventaura-4516b.appspot.com/0e4062e1-baee-4d4d-ad4e-95ccce0ad619-first3dmodel.mp4"
  return (
    <div className="relative h-[70vh] flex flex-col md:flex-row justify-center items-center">
      <video autoPlay controls className="w-4/5 max-w-4xl md:h-full">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button className="absolute bottom-5 right-5 bg-[#00A167] text-white py-2 px-4  text-lg">
        Pay for Property
      </button>
    </div>
  )
}

export default Model3d;