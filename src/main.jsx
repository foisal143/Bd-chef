import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import ChefProvaider from './provaider/ChefProvaider/ChefProvaider';
import AuthProvaider from './provaider/AuthProvaider/AuthProvaider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChefProvaider>
      <AuthProvaider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </AuthProvaider>
    </ChefProvaider>
  </React.StrictMode>
);
