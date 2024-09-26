import React from 'react';
import Navbar from '../components/navbar';

const LayoutWitoutFooter = ({ children }) => {
  return (
    <>
    <div className="min-h-screen flex flex-col max-w-[1797px] justify-center mx-auto my-0">
      <Navbar />
      <main className="flex-grow px-[20px] md:px-[62px]">
        {children}
      </main>
    </div>
    </> 
  );
};

export default LayoutWitoutFooter;
