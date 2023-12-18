import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../provaider/AuthProvaider/AuthProvaider';
const Login = () => {
  const { googleLogin, githubLogin, loginUser } = useContext(UserContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const from = location?.state?.pathname;
  const navigate = useNavigate();

  const handlerGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const loggedUser = result.user;

        setSuccess('Login Success');
        navigate(from, { replace: true });
      })
      .catch(er => console.log(er.message));
  };

  const handlerGithubLogin = () => {
    githubLogin()
      .then(res => {
        const loggedUser = res.user;
        setSuccess('Login Success');
        navigate(from, { replace: true });
      })
      .catch(er => console.log(er.message));
  };

  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form?.email?.value;
    const password = form?.password?.value;
    loginUser(email, password)
      .then(res => {
        const loggedUser = res.user;
        setSuccess('Login Success');
        navigate(from, { replace: true });
      })
      .catch(er => setError(er.message));
  };

  return (
    <div className="hero min-h-[calc(100vh-80px)]">
      <div className="hero-content flex-col border-[#f4d699] border lg:w-1/3 rounded-md ">
        <h1 className="text-3xl font-bold">Login now!</h1>

        <div
          className="card shrink-0 w-full max-w-sm  shadow-2xl 
        "
        >
          <form onSubmit={handlerFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input border-[#f4d699] focus:outline-[#f4d699] bg-transparent outline-[#f4d699] input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>

              <input
                type={showPass ? 'text' : 'password'}
                placeholder="password"
                name="password"
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
              <span
                className="absolute cursor-pointer top-[52px] right-2"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? (
                  <FaRegEye></FaRegEye>
                ) : (
                  <FaRegEyeSlash></FaRegEyeSlash>
                )}
              </span>
              <span className="text-xs text-red-300">{error}</span>
              <span className="text-xs text-green-500 ">{success}</span>
            </div>
            <div className="form-control mt-6">
              <button type="button" className="coustom-btn">
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <small>
              {' '}
              Don't have any account ?{' '}
              <Link className="text-[#f4d699]" to="register">
                Register
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
          <button
            onClick={handlerGoogleLogin}
            className="btn rounded-full flex gap-3 btn-outline btn-accent"
          >
            <FaGoogle /> Continue With Google
          </button>
          <button
            onClick={handlerGithubLogin}
            className="btn rounded-full flex gap-3 btn-outline btn-primary"
          >
            <FaGithub></FaGithub> Continue With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
