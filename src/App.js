import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import Navbar from "./navbar";

const App = () => {
  const API_ID = "7e71ed09";
  const API_KEY = "a16af47fe1dc0891932f24129b05f64b";

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
  /* eslint-disable */
  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    console.log(data.hits);
    setRecipe(data.hits);
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
     <Navbar />
      <div className="call"></div>
     
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={onChangeHandler}
          autoFocus
          placeholder="Enter a dish name.."
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
 //  <div className="title">Food Recipe</div>