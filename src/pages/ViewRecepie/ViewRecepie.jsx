import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import { MdFavorite } from 'react-icons/md';

const ViewRecepie = () => {
  const chef = useLoaderData();
  const { recipes } = chef;

  const { picture_url, name } = chef;
  return (
    <div className="mt-12">
      <div className="flex px-5 lg:px-12 mt-20 flex-col lg:flex-row gap-10 justify-between ">
        <div className="lg:w-1/2 ">
          <h4 className="text-3xl font-bold mb-5">{name}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            quos voluptates nemo mollitia, alias et autem dicta saepe, vel
            ducimus voluptatem cum laboriosam eligendi sit neque. Odio ab
            tenetur sed?
          </p>
        </div>
        <img
          className=" lg:w-1/2 rounded-md h-96 mx-auto lg:mx-0"
          src={picture_url}
          alt=""
        />
      </div>
      <h3 className="text-center mt-10 text-3xl font-bold">Recipes</h3>
      <div className="text-end px-5 lg:px-12 my-5 ">
        <Link to="/favorite">
          <button className=" coustom-btn flex items-center gap-1">
            Favorite Recipes <MdFavorite></MdFavorite>
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1   my-12 lg:grid-cols-3 gap-5 px-5 lg:px-12">
        {recipes &&
          recipes.map(recipe => (
            <Recipes key={recipe.recipe_id} recipe={recipe}></Recipes>
          ))}
      </div>
    </div>
  );
};

export default ViewRecepie;
