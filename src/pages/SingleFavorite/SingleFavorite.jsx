import React from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa6';
import Rating from 'react-rating';

const SingleFavorite = ({ fav, handlerRemoveItem }) => {
  const {
    recipe_id,
    ingredients,
    recipe_name,
    instructions,
    rating,
    likeCount,
  } = fav;
  return (
    <div className="flex  justify-center">
      <div className="border relative border-[#f4d699] p-5 pb-10">
        <h4 className="text-2xl font-semibold ">{recipe_name}</h4>
        <ul className="list-disc my-3 ms-5">
          {ingredients && ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>
        <p>
          <span className="font-semibold text-xl">Instructions:</span>{' '}
          {instructions}
        </p>
        <p className="mt-5 pb-5 flex justify-between items-center">
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
          onClick={() => handlerRemoveItem(recipe_id)}
          className="coustom-btn w-10/12 mx-auto items-center absolute bottom-3 justify-center flex gap-1"
        >
          Delete
          <FaTrash></FaTrash>
        </button>
      </div>
    </div>
  );
};

export default SingleFavorite;
