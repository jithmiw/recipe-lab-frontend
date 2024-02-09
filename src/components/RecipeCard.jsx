import React from "react";

const RecipeCard = ({ title, ingredients, directions }) => (
  <div className="recipe card mt-4">
    <h3 className="card-title text-center pt-3 fw-bold">{title}</h3>
    <div className="card-body">
      <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h4>Directions:</h4>
      <ol>
        {directions.map((direction) => (
          <li key={direction}>{direction}</li>
        ))}
      </ol>
    </div>
  </div>
);

export default RecipeCard;
