import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" py-12 bg-blue-950">
      <div className="text-center">
        <h4 className="text-4xl font-bold">Newsletter</h4>
        <p className="text-xs ">Subscribe to our mailing list</p>
      </div>
      <div className="w-10/12 lg:w-1/2 rounded-full overflow-hidden my-5 border border-[#f4d699] mx-auto">
        <input
          className="w-10/12 px-5 bg-transparent h-10"
          type="email"
          placeholder="email"
        />
        <button className="w-[calc(100%-83.3333%)] h-10 text-black bg-[#f4d699]">
          Send
        </button>
      </div>
      <div className="grid px-5 lg:px-12 mt-12 grid-cols-1 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="text-xl text-center font-bold">Menu</h4>
          <div className="flex mt-4 flex-col justify-center text-center gap-3">
            <Link>Private Chef</Link>
            <Link>Catering</Link>
            <Link>Menu</Link>
            <Link>About</Link>
          </div>
        </div>
        <div>
          <h4 className="text-xl text-center font-bold">CATERING</h4>
          <div className="flex mt-4 flex-col justify-center text-center gap-3">
            <Link>Corporate Events</Link>
            <Link>Weddings And Galas</Link>
            <Link>Special Events</Link>
            <Link>Cooking Classes</Link>
          </div>
        </div>
        <div>
          <h4 className="text-xl text-center font-bold">CONTACTS</h4>
          <div className="flex mt-4 flex-col justify-center text-center gap-3">
            <Link>1122 Potter Rd, Antelope</Link>
            <Link>info@example.com</Link>
            <Link>1 888 123 4567</Link>
          </div>
        </div>
        <div>
          <h4 className="text-xl text-center font-bold">SOCIAL</h4>
          <div className="flex mt-4 flex-col justify-center text-center gap-3">
            <Link>Facebook</Link>
            <Link>Behance</Link>
            <Link>Instagram</Link>
            <Link>Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
