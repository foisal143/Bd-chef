import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center  items-center min-h-screen">
      <div className="text-center">
        {' '}
        <h3 className="text-7xl font-bold">404</h3>
        <p>sorry this page not found</p>
        <span
          onClick={() => navigate(-1)}
          className="cursor-pointer coustom-btn flex gap-3 mt-2 items-center"
        >
          <FaArrowLeft></FaArrowLeft> Back
        </span>
      </div>
    </div>
  );
};

export default ErrorPage;
