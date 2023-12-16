import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
  const { id, recipes, picture_url, name, likes, experience_years } = chef;
  return (
    <div className="border rounded-md border-[#f4d699]">
      <figure>
        <img className="h-52 w-full" src={picture_url} alt={name} />
      </figure>
      <div className="card-body px-3 py-5">
        <h2 className="card-title">{name}</h2>
        <p className="flex justify-between">
          <span>Experience: {experience_years} year</span>{' '}
          <span>Recipes: {recipes.length}</span> <span>Like: {likes}</span>
        </p>
        <div className="card-actions justify-center">
          <Link to={`/recepie/${id}`}>
            <button className="coustom-btn w-full mt-5">View Recepies</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
