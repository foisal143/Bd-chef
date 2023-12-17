import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import Slider from 'react-slick';

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReview(data));
  }, []);
  console.log(review);
  return (
    <div>
      <h3 className="text-5xl text-center  font-semibold">
        What Customers Are Saying <br /> About Us
      </h3>
      <div className="my-12 px-5 py-12 lg:px-12">
        <Slider {...settings} className="flex gap-10">
          {review &&
            review.map((re, i) => <ReviewCard key={i} rev={re}></ReviewCard>)}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
