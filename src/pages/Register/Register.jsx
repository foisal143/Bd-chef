import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../../provaider/AuthProvaider/AuthProvaider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { createUesr, googleLogin, githubLogin } = useContext(UserContext);

  const handlerGoogleLogin = () => {
    setSuccess('');
    googleLogin()
      .then(res => {
        console.log(res.user);
        setSuccess('Registation success');
      })
      .catch(er => setError(er.message));
  };

  const handlerGithubLogin = () => {
    setSuccess('');
    githubLogin()
      .then(res => {
        console.log(res.user);
        setSuccess('Registation success');
      })
      .catch(er => setError(er.message));
  };

  const handlerFormSubmit = e => {
    setSuccess('');
    setError('');
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    //  password validation
    if (password.length < 6) {
      setError('password should be 6 charecter');
      return;
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setError('password should be at least one capital letter');
      return;
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setError('password should be at least one small letter');
      return;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setError('password should be one digit');
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError('password should be one special charecter');
      return;
    }

    createUesr(email, password)
      .then(res => {
        const loggedUser = res.user;
        profleUpdate(loggedUser, name, image);
        setSuccess('Registation success');
      })
      .catch(er => setError(er.message));
  };

  const profleUpdate = (user, name, image) => {
    updateProfile(user, { displayName: name, photoURL: image })
      .then(() => {})
      .catch(er => setError(er.message));
  };
  return (
    <div className="hero py-5 min-h-[calc(100vh-80px)]">
      <div className="hero-content flex-col border-[#f4d699] border lg:w-1/3 rounded-md ">
        <h1 className="text-3xl font-bold">Register now!</h1>
        <div className="card shrink-0 w-full max-w-sm  shadow-2xl">
          <form onSubmit={handlerFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
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
                name="image"
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
                name="email"
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
                name="password"
                className="input bg-transparent focus:outline-[#f4d699] border-[#f4d699] input-bordered"
                required
              />
              <span className="text-xs text-red-300">{error}</span>
              <span className="text-xs text-green-500 ">{success}</span>
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

export default Register;
