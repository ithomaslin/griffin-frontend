import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '.';

const UnauthenticatedLayout = () => {
  return (
    <>
      <div className='relative z-0'>
        <div>
          <Navbar />
        </div>
        <Outlet />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UnauthenticatedLayout;