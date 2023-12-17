const getDataFromDb = () => {
  let allData = {};
  const data = JSON.parse(localStorage.getItem('recipes'));
  if (data) {
    allData = data;
  }
  return allData;
};

const addToDb = id => {
  const data = getDataFromDb();
  data[id] = 1;
  localStorage.setItem('recipes', JSON.stringify(data));
};

const removeRecipe = id => {
  const localData = getDataFromDb();
  if (id in localData) {
    delete localData[id];
  }
  localStorage.setItem('recipes', JSON.stringify(localData));
};

export { getDataFromDb, addToDb, removeRecipe };
