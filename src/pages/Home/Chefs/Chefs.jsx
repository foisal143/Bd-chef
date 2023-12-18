import React, { useContext } from 'react';
import { ChefContext } from '../../../provaider/ChefProvaider/ChefProvaider';
import Chef from '../Chef/Chef';

const Chefs = () => {
  const chefs = useContext(ChefContext);

  return (
    <div className="px-5 mt-32 lg:mt-0  lg:px-12">
      <h3 className="text-3xl lg:text-5xl pt-12 lg:pt-0 font-bold text-center">
        Chef
      </h3>
      <div className="grid grid-cols-1 my-5 py-10 gap-5 lg:grid-cols-3">
        {chefs && chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)}
      </div>
    </div>
  );
};

export default Chefs;
