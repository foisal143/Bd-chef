import React, { useContext } from 'react';
import { UserContext } from '../provaider/AuthProvaider/AuthProvaider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(UserContext);
  const location = useLocation();
  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location}></Navigate>;
};

export default PrivateRoute;
