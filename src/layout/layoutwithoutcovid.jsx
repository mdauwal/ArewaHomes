import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const LayoutWithoutCovid = ({ children }) => {
  return (
    <>
    <div className="min-h-screen flex flex-col max-w-[1797px] justify-center mx-auto my-0">
      <Navbar />
      <main className="flex-grow px-[62px]">
        {children}
      </main>
      <Footer />
    </div>
    </> 
  );
};

export default LayoutWithoutCovid;