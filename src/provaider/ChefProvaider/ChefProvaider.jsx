import React, { createContext, useEffect, useState } from 'react';
export const ChefContext = createContext(null);
const ChefProvaider = ({ children }) => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch('https://bd-chef-server-ashy.vercel.app/chefs')
      .then(res => res.json())
      .then(data => setChefs(data.chefs))
      .catch(er => console.log(er.message));
  }, []);
  return <ChefContext.Provider value={chefs}>{children}</ChefContext.Provider>;
};

export default ChefProvaider;
