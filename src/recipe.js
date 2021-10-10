import React from "react";
//import style from "./recipe.module.css";

const Recipe = ({ title, calories, serves, image, ingredients }) => {
  const cal = Math.round(calories/serves);
  return (
    <div className="recipe">
      <img className="image" src={image} alt="" />
      <div className="recipe-title">{title}</div>

      <ul className="ul-text">
        {ingredients.map((ingredient) => (
          <li style={{ fontFamily: "Roboto", textAlign: "left" }}>
            {ingredient.text}
          </li>
        ))}
      </ul>
      <span>
        <div className="nutrition">Serves {serves}</div>
        <div className="nutrition cals">Calories : {cal}</div>
      </span>
    </div>
  );
};

export default Recipe;
