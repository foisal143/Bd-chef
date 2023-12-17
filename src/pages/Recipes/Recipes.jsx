import React, { useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import Rating from 'react-rating';
import { toast } from 'react-toastify';
import { FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';
import { BiSolidLike } from 'react-icons/bi';
import 'react-toastify/dist/ReactToastify.css';
const Recipes = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const { ingredients, recipe_name, instructions, rating, likeCount } = recipe;

  const handlerSetFav = () => {
    setFavorite(true);
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
        <p className="mt-5 flex justify-between items-center">
          <Rating
            className="text-yellow-500"
            placeholderRating={rating}
            emptySymbol={<FaStarHalf />}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaRegStar />}
          ></Rating>
          <span className="flex items-center gap-1">
            <BiSolidLike></BiSolidLike> {likeCount}
          </span>
        </p>
        <button
          disabled={favorite && true}
          onClick={handlerSetFav}
          className={`absolute  bottom-2 ${favorite ? 'text-red-500' : ''}`}
        >
          <MdFavorite className="text-2xl "></MdFavorite>
        </button>
      </div>
    </div>
  );
};

export default Recipes;
