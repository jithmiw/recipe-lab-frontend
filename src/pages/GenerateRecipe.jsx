import React, { useState, useEffect } from "react";
import { SearchBar, RecipeCard, FeatureItem } from "../components";
import { getRandomPrompt } from "../utils";
import axios from "axios";

const GenerateRecipe = () => {
  const [ingredients, setIngredients] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  useEffect(() => {
    handleInspireMe();
  }, []);

  const handleInspireMe = () => {
    const randomRecipe = getRandomPrompt();
    setIngredients(randomRecipe);
    // fetchRecipes();
  };

  const handleIngredientsChange = (event) => {
    const ingredients = event.target.value;

    // Check for valid ingredient names:
    if (!ingredients.match(/^(?:[a-zA-Z\s\-',.()&]+(?:,\s)?)+$/)) {
      setIsValid(false);
      return;
    }

    setIngredients(ingredients);
    setIsValid(ingredients.length > 0);
  };

  const fetchRecipes = async () => {
    setIsLoading(true); // Start loading spinner
    try {
      const response = await axios.get("http://3.83.242.135:8000/recipes", {
        params: { ingredients },
      });
      setRecipes(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching recipes");
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipes();
  };

  return (
    <>
      <div
        className="row pt-5 pb-5 rounded"
        style={{
          backgroundImage: "url(/images/generate-recipe-bg.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-12 col-lg-6 offset-lg-3">
          <SearchBar
            ingredients={ingredients}
            onChange={handleIngredientsChange}
            isValid={isValid}
            onInspireMe={handleInspireMe}
            disabled={isLoading}
            onSubmit={handleSubmit}
          />
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {isLoading && (
            <div className="d-flex justify-content-center mt-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {recipes.length > 0 && (
            <div className="recipes mt-4">
              <h4 style={{ color: "#656C7B" }}>Recommended Recipes:</h4>
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.title} {...recipe} />
              ))}
            </div>
          )}
        </div>
      </div>
      <FeatureItem />
    </>
  );
};

export default GenerateRecipe;
