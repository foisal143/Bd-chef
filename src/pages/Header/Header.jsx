import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../provaider/AuthProvaider/AuthProvaider';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
const Header = () => {
  const { user, logout } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const handlerTheme = e => {
    console.log(e.target.checked);
  };
  return (
    <nav className="flex lg:px-12 px-2    justify-between items-center h-20">
      <div>
        <Link to="/">
          <h3 className=" text-2xl lg:text-4xl font-bold">BD-CHEF</h3>
        </Link>
      </div>
      <div
        className={`flex w-full text-center lg:w-fit gap-5 z-10 flex-col lg:flex-row lg:static absolute  right-0 ${
          isOpen ? 'top-20  p-5 bg-black' : '-top-96'
        } duration-500`}
      >
        {/* responsive small login logout section */}
        <div className="lg:hidden block">
          {user ? (
            <div className="flex justify-center items-center gap-3 ">
              <Link to="/profile">
                <div className="w-11 cursor-pointer h-11  flex justify-center items-center rounded-full bg-[#f4d699]">
                  <img
                    title={user && user.displayName}
                    className="w-10 cursor-pointer h-10 rounded-full"
                    src={user && user.photoURL}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="coustom-btn">login</button>
            </Link>
          )}
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && 'lg:border-b-2 lg:border-0  border border-[#f4d699]'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive && ' border lg:border-b-2 lg:border-0  border-[#f4d699]'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive && 'border lg:border-b-2 lg:border-0  border-[#f4d699]'
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive && 'border lg:border-b-2 lg:border-0  border-[#f4d699]'
          }
        >
          Login
        </NavLink>
      </div>

      <div className="lg:hidden ">
        <button className="text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaXmark></FaXmark> : <FaBars></FaBars>}
        </button>
      </div>
      <div className="lg:block hidden">
        {user ? (
          <div className="flex gap-3">
            <Link to="/profile">
              <div className="w-11 cursor-pointer h-11  flex justify-center items-center rounded-full bg-[#f4d699]">
                <img
                  title={user && user.displayName}
                  className="w-10 cursor-pointer h-10 rounded-full"
                  src={user && user.photoURL}
                  alt=""
                />
              </div>
            </Link>
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
