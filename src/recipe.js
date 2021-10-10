import React from "react";
//import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  const cal = Math.round(calories);
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
      <p>
        <div className="cals">Calories : {cal} grams</div>
      </p>
    </div>
  );
};

export default Recipe;
