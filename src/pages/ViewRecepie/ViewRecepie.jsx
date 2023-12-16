import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

const ViewRecepie = () => {
  const chef = useLoaderData();
  const { recipes } = chef;
  return (
    <div className="mt-12">
      <h3 className="text-center text-3xl font-bold">Recipes</h3>

      <div className="grid grid-cols-1   mt-12 lg:grid-cols-3 gap-5 px-5 lg:px-12">
        {recipes &&
          recipes.map(recipe => (
            <Recipes key={recipe.recipe_id} recipe={recipe}></Recipes>
          ))}
      </div>
    </div>
  );
};

export default ViewRecepie;
