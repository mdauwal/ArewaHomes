import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <>
    <div className='bg-black h-6 text-center text-white underline'><p>Read out Covid-19 guidelines</p></div>
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

export default Layout;
