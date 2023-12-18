import { getDataFromDb } from './fakDb';

const loaderFav = async () => {
  const data = await getDataFromDb();
  const chefData = await fetch('https://bd-chef-server-ashy.vercel.app/chefs');
  const chefs = await chefData.json();

  const favoriteRecipe = [];

  for (const id in data) {
    for (const recipes of chefs.chefs) {
      const recipe = recipes.recipes;

      const addedData = recipe.find(re => re.recipe_id == id);
      favoriteRecipe.push(addedData);
    }
  }
  const favorites = favoriteRecipe.filter(fav => fav !== undefined);

  return { chefs, favorites };
};

export default loaderFav;
