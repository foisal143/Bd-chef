import React from 'react';
import Header from '../../pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';

const Recepies = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Recepies;
