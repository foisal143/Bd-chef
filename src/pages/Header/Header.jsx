import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../provaider/AuthProvaider/AuthProvaider';

const Header = () => {
  const { user, logout } = useContext(UserContext);

  const handlerLogout = () => {
    logout()
      .then(() => {})
      .catch(er => console.log(er.message));
  };
  return (
    <nav className="flex lg:px-12 px-2 justify-between items-center h-20">
      <div>
        <Link to="/">
          <h3 className="text-4xl font-bold">BD-CHEF</h3>
        </Link>
      </div>
      <div className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && 'border-b-2 border-[#f4d699]'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive && 'border-b-2 border-[#f4d699]'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive && 'border-b-2 border-[#f4d699]'
          }
        >
          Blog
        </NavLink>
      </div>
      <div>
        {user ? (
          <div className="flex gap-3">
            <div className="w-11 h-11 flex justify-center items-center rounded-full bg-[#f4d699]">
              <img
                title={user && user.displayName}
                className="w-10 h-10 rounded-full"
                src={user && user.photoURL}
                alt=""
              />
            </div>
            <button onClick={handlerLogout} className="coustom-btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="coustom-btn">login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
