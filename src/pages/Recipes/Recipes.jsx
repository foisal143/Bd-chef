import React, { useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Recipes = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const { ingredients, recipe_name, instructions } = recipe;

  const handlerSetFav = () => {
    setFavorite(!favorite);
    toast(favorite ? 'Remove To Favorite' : 'Added To Favorite');
  };
  return (
    <div className="flex justify-center">
      <div className="border relative border-[#f4d699] p-5 pb-10">
        <h4 className="text-2xl font-semibold ">{recipe_name}</h4>
        <ul className="list-disc my-3 ms-5">
          {ingredients && ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>
        <p>
          <span className="font-semibold text-xl">Instructions:</span>{' '}
          {instructions}
        </p>
        <span
          onClick={handlerSetFav}
          className={`absolute cursor-pointer bottom-2 ${
            favorite ? 'text-red-500' : ''
          }`}
        >
          <MdFavorite className="text-2xl "></MdFavorite>
        </span>
      </div>
    </div>
  );
};

export default Recipes;
