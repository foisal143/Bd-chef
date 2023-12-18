import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleFavorite from '../SingleFavorite/SingleFavorite';
import { removeRecipe } from '../../utilitis/fakDb';

const Favorite = () => {
  const { favorites } = useLoaderData();
  const [favorite, setFavorite] = useState(favorites);
  const [idRece, setIdrece] = useState(null);
  const handlerRemoveItem = id => {
    const restRecipes = favorite.filter(f => f.recipe_id !== id);
    removeRecipe(id);
    setFavorite(restRecipes);
    setIdrece(id);
  };
  return (
    <div className="mt-20 lg:px-12 px-5">
      <h3 className="text-3xl font-semibold text-center">Favorite Recipes</h3>

      {favorite.length > 0 ? (
        <div className="my-20  grid grid-cols-1 lg:grid-cols-3 gap-5">
          {favorite &&
            favorite.map(fav => (
              <SingleFavorite
                key={fav.recipes_id}
                handlerRemoveItem={handlerRemoveItem}
                fav={fav}
              ></SingleFavorite>
            ))}
        </div>
      ) : (
        <p className="text-center mt-20">No Recipes Added</p>
      )}
      {idRece && (
        <div className="text-center mt-5">
          <Link
            className="w-fit mx-auto"
            to={idRece ? `/recepie/${idRece}` : '/'}
          >
            <button className="coustom-btn">Go To Recipes Page</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorite;
