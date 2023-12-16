import React from 'react';
import Header from '../../pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';

const LoginLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default LoginLayout;
