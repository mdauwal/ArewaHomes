import React from 'react';
import Navbar from '../components/navbar';

const FormLayout = ({ children }) => {
  return (
    <>
    <div className="min-h-screen flex flex-col max-w-[1797px] justify-center mx-auto my-0">
      <Navbar />
      <main className="flex-grow px-[20px] md:px-[62px]">
        <div className='flex items-start font-unna border-b border-b-gray-400 mt-10 pb-5'>
            <p>Add a new listing</p>
            {/* <button className='bg-black py-3 px-6 font-unna text-white'>Add a new Listing</button> */}
        </div>
        {children}
      </main>
    </div>
    </> 
  );
};

export default FormLayout;
