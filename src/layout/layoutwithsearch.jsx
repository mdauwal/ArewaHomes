import React from 'react';
import Footer from '../components/footer';
import NavbarWithSearch from '../components/navbarwithsearch';

const LayoutWithSearch = ({ children }) => {
  return (
    <>
    <div className="min-h-screen flex flex-col max-w-[1797px] justify-center mx-auto my-0">
      <NavbarWithSearch />
      <main className="flex-grow px-[20px] md:px-[62px]">
        {children}
      </main>
      <Footer />
    </div>
    </> 
  );
};

export default LayoutWithSearch;
