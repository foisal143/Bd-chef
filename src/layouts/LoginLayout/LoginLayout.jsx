import React from 'react';
import Header from '../../pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';

const LoginLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-160px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LoginLayout;
