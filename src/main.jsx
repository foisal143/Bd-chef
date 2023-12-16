import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import ChefProvaider from './provaider/ChefProvaider/ChefProvaider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChefProvaider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </ChefProvaider>
  </React.StrictMode>
);
