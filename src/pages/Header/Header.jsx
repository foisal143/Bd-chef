import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const user = null;
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
          <button className="coustom-btn">Logout</button>
        ) : (
          <button className="coustom-btn">login</button>
        )}
      </div>
    </nav>
  );
};

export default Header;
