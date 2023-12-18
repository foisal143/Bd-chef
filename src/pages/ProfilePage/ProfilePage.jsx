import React, { useContext } from 'react';
import { UserContext } from '../../provaider/AuthProvaider/AuthProvaider';
import { updateProfile } from 'firebase/auth';

const ProfilePage = () => {
  const { user, logout } = useContext(UserContext);

  const handlerLogout = () => {
    logout()
      .then(() => {})
      .catch(er => console.log(er.message));
  };

  const handlerUpdateProfile = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.image.value;

    user.displayName = name;
    user.photoURL = url;
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
      {user ? (
        <div className="border border-[#f4d699] rounded-md p-5 text-center h-96">
          <div className="w-[116px] h-[116px] flex items-center justify-center bg-[#f4d699] overflow-hidden rounded-full mx-auto">
            <img
              className="w-28 h-28 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <p className="text-gray-400 mt-8">{user?.email}</p>
          <p className="font-semibold text-xl">Name: {user?.displayName}</p>
          <div className="flex flex-col mt-3 gap-3">
            <button
              onClick={() => document.getElementById('my_modal_5').showModal()}
              className="coustom-btn2 "
            >
              Update Profile
            </button>
            <button onClick={handlerLogout} className="coustom-btn  ">
              Logout
            </button>
          </div>
          {/* modal */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box bg-black border border-[#f4d699]">
              <form onSubmit={handlerUpdateProfile} action="">
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
                <div className="form-control mt-6 modal-action">
                  <button className="coustom-btn">Save</button>
                </div>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      ) : (
        <p className="text-center">No User Logged in</p>
      )}
    </div>
  );
};

export default ProfilePage;
