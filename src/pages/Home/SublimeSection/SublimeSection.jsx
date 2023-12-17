import React from 'react';

const SublimeSection = () => {
  return (
    <div className=" px-5 lg:px-12 flex flex-col lg:flex-row min-h-[70vh] lg:min-h-[35vh] justify-between gap-5 mt-20  ">
      <div className="flex h-full   relative lg:w-1/2 justify-center items-center flex-col">
        <img
          className=" absolute right-0 lg:right-20 top-0"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PWUpMlEaC9SYA1VuUwOzbF0bCi2wpRnpLg&usqp=CAU"
          alt=""
        />
        <img
          className=" absolute top-20 right-20 lg:right-40"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezaBgNX7uwzXLjnDazNFfyPm7xv1zcPQDEA&usqp=CAU"
          alt=""
        />
      </div>
      <div className=" lg:static relative top-20  lg:w-1/2">
        <h3 className="text-5xl font-bold ">Experience The Sublime!</h3>
        <p className="my-5">
          Chef Alanzo prepares and serves exquisite dinners to parties from two
          to 200 at your home, business or private catering event. His blend of
          French-Mediterranean cuisine draws on a lifetime of skills and the
          knowledge that all meals, no matter how large or how small, are
          special events among family and friends
        </p>
        <button className="coustom-btn">About Us</button>
      </div>
    </div>
  );
};

export default SublimeSection;
