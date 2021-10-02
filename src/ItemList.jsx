import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Recipe from './Recipe.jsx'

function ItemList() {
  const API_ID = "9819bf01";
	const API_KEY = "90e71e7e3741b56831e6745ffb819844";

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
    <div>
      	<div className="App">
			<div className="call"></div>
			<div className="title">Food Recipe</div>
			<form className="search-form" onSubmit={getSearch}>
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={onChangeHandler}
					autoFocus
					placeholder="Enter a dish name"
				/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		
			<div className="recipes">
      <Container>
      <Grid container spacing={3}>
				{recipes.map((e) => (
          <Grid item xs={12} md={6} lg={4}>
					<Recipe
						key={e.recipe.url}
						title={e.recipe.label}
						calories={e.recipe.calories}
						image={e.recipe.image}
						ingredients={e.recipe.ingredients}
					/>
          </Grid>
				))}
        </Grid>
        </Container>
			</div>
		</div>
    </div>
  )
}
export default ItemList
