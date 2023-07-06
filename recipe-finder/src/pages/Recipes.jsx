import { useState } from "react";
import PropTypes from "prop-types";

import recipes from "../Recipes";
import Modal from "../components/Modal";
import Editing from "../components/Editing";
import Delete from "../components/Delete"; // Import the Delete component

const Recipes = () => {
  Recipes.propTypes = {
    recipes: PropTypes.array,
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [recipesState, setRecipesState] = useState(recipes);
  const [editingRecipe, setEditingRecipe] = useState(null); // Add new state

  // Filter the recipes based on the search term
  const filteredRecipes = recipesState.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input change in the search bar
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    filterItem();
  };

  let filterItem = () => {
    let tempItems = [...recipes];
    let filteredArray = tempItems.filter((item) =>
      item.title.includes(searchTerm)
    );
    setRecipesState(filteredArray);
  };

  const addRecipe = (newRecipe) => {
    setRecipesState((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const startEditing = (recipe) => {
    setEditingRecipe(recipe);
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipesState((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe === editingRecipe ? updatedRecipe : recipe
      )
    );
    setEditingRecipe(null);
  };

  const deleteRecipe = (recipeId) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      setRecipesState((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== recipeId)
      );
    }
  };

  return (
    <div className="mx-auto my-8 min-h-screen">
      <Modal addRecipe={addRecipe} />

      <div>
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Welcome to Tasty Delights
        </h1>
        <p className="text-xl text-center">
          These are recipes that I have done over the years of cooking.
        </p>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <>
              <div className="mr-4">
                <input
                  type="text"
                  placeholder="Search recipes"
                  value={searchTerm}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-96"
                />
              </div>
            </>
          </div>

          <h2 className="text-2xl font-bold mb-4 ml-5 text-gray-800">
            Featured Recipes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRecipes.map((recipe, index) => (
              <div key={index}>
                {editingRecipe === recipe ? (
                  <Editing
                    recipe={recipe}
                    updateRecipe={updateRecipe}
                    cancelEditing={() => setEditingRecipe(null)}
                  />
                ) : (
                  <>
                    <h3 className="text-lg font-bold mb-4">{recipe.title}</h3>
                    <img
                      className="rounded w-full mb-4 shadow object-cover```jsx
                      object-center h-56 sm:h-64 md:h-80"
                      src={recipe.imageSrc}
                      alt={recipe.title}
                    />
                    <p>{recipe.description}</p>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                      onClick={() => startEditing(recipe)}
                    >
                      Edit
                    </button>
                    <Delete recipe={recipe} onDelete={deleteRecipe} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
