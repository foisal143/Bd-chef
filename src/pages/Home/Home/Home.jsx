import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SublimeSection from '../SublimeSection/SublimeSection';
import Chefs from '../Chefs/Chefs';
import Review from '../Review/Review';
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="flex  flex-col justify-center my-12 items-center">
        <Slider
          {...settings}
          className="w-10/12 mx-auto  h-[calc(100vh-160px)]"
        >
          <div className="relative rounded-md h-[calc(100vh-160px)]  mx-auto">
            <img
              className="w-full h-full rounded-md"
              src="https://i.guim.co.uk/img/media/96d08e10c041fdbfca972f993a4262bd30e7fd92/0_804_7816_4690/master/7816.jpg?width=620&quality=85&auto=format&fit=max&s=765933277a4f1b164675b18f11e9901b"
              alt=""
            />
            <div className="w-2/3 h-full absolute top-0 bg-gradient-to-r from-black via-black to-transparent opacity-90"></div>

            <div className="absolute top-32 left-5 lg:w-1/2">
              <h2 className=" my-5 lg:text-6xl font-bold">
                Delicious Food Is My Passion
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, autem. Vitae beatae, assumenda molestiae cumque
                pariatur saepe laborum ab non quos dolorum quam repellendus
                atque soluta iste sit, sunt ullam.
              </p>
              <button className="coustom-btn my-5">Contuct Me</button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-160px)] w-10/12 mx-auto">
            <img
              className="w-full h-full rounded-md"
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <div className="w-2/3 h-full absolute top-0 bg-gradient-to-r from-black via-black to-transparent opacity-90"></div>

            <div className="absolute top-32 left-5 lg:w-1/2">
              <h2 className=" my-5 lg:text-6xl font-bold">
                Delicious Food Is My Passion
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, autem. Vitae beatae, assumenda molestiae cumque
                pariatur saepe laborum ab non quos dolorum quam repellendus
                atque soluta iste sit, sunt ullam.
              </p>
              <button className="coustom-btn my-5">Contuct Me</button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-160px)] w-10/12 mx-auto">
            <img
              className="w-full h-full rounded-md"
              src="https://www.mbbmanagement.com/wp-content/uploads/2017/09/Depositphotos_10674566_chef-1024x683.jpg"
              alt=""
            />
            <div className="w-2/3 h-full absolute top-0 bg-gradient-to-r from-black via-black to-transparent opacity-90"></div>

            <div className="absolute top-32 left-5 lg:w-1/2">
              <h2 className=" my-5 lg:text-6xl font-bold">
                Delicious Food Is My Passion
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, autem. Vitae beatae, assumenda molestiae cumque
                pariatur saepe laborum ab non quos dolorum quam repellendus
                atque soluta iste sit, sunt ullam.
              </p>
              <button className="coustom-btn my-5">Contuct Me</button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-160px)] w-10/12 mx-auto">
            <img
              className="w-full rounded-md h-full"
              src="https://media.cnn.com/api/v1/images/stellar/prod/230817201224-01-kitchen-culture-travel.jpg?c=original"
              alt=""
            />
            <div className="w-2/3 h-full absolute top-0 bg-gradient-to-r from-black via-black to-transparent opacity-90"></div>

            <div className="absolute top-32 left-5 lg:w-1/2">
              <h2 className=" my-5 lg:text-6xl font-bold">
                Delicious Food Is My Passion
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, autem. Vitae beatae, assumenda molestiae cumque
                pariatur saepe laborum ab non quos dolorum quam repellendus
                atque soluta iste sit, sunt ullam.
              </p>
              <button className="coustom-btn my-5">Contuct Me</button>
            </div>
          </div>
        </Slider>

        <SublimeSection></SublimeSection>
      </div>
      <Chefs></Chefs>
      <Review></Review>
    </>
  );
};

export default Home;
