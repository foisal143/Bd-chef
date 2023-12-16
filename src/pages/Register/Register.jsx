import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="hero py-5 min-h-[calc(100vh-80px)]">
      <div className="hero-content flex-col border-[#f4d699] border lg:w-1/3 rounded-md ">
        <h1 className="text-3xl font-bold">Register now!</h1>

        <div
          className="card shrink-0 w-full max-w-sm  shadow-2xl 
        "
        >
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input border-[#f4d699] focus:outline-[#f4d699] bg-transparent outline-[#f4d699] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Url</span>
              </label>
              <input
                type="text"
                placeholder="image url"
                className="input border-[#f4d699] focus:outline-[#f4d699] bg-transparent outline-[#f4d699] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input border-[#f4d699] focus:outline-[#f4d699] bg-transparent outline-[#f4d699] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input bg-transparent focus:outline-[#f4d699] border-[#f4d699] input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-white link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="coustom-btn">Register</button>
            </div>
          </form>
          <div className="text-center">
            <small>
              {' '}
              Already have an account ?{' '}
              <Link className="text-[#f4d699]" to="/login">
                Login
              </Link>
            </small>
          </div>
        </div>
        <div className=" w-full items-center px-8 flex gap-2">
          <div className=" w-1/2  h-[1px] bg-[#f4d699]"></div>
          <span>Or</span>
          <div className="w-1/2 h-[1px] bg-[#f4d699]"></div>
        </div>
        <div className="flex w-full px-8 gap-5 flex-col">
          <button className="btn rounded-full flex gap-3 btn-outline btn-accent">
            <FaGoogle /> Continue With Google
          </button>
          <button className="btn rounded-full flex gap-3 btn-outline btn-primary">
            <FaGithub></FaGithub> Continue With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
