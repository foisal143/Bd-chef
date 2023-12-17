import React from 'react';

const ReviewCard = ({ rev }) => {
  const { chef_review, image, author } = rev;
  return (
    <div className="text-center">
      <img
        className=" w-20 h-20 lg:h-32 lg:w-32  rounded-full mx-auto"
        src={image}
        alt=""
      />
      <p className="my-5 text-xs lg:text-base">{chef_review.slice(0, 200)}</p>
      <p className="text-xl font-bold text-[#f4d699]">{author}</p>
    </div>
  );
};

export default ReviewCard;
