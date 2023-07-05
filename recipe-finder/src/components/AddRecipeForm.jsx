import { useState } from "react";
import PropTypes from 'prop-types';

const initialRecipeState = {
  title: "",
  description: "",
  imageSrc: ""
};

export default function AddRecipeForm({ hModal, onAddRecipe }) {
  const [recipeFormState, setRecipeFormState] = useState(initialRecipeState);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRecipeFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddRecipeFormSubmit = async (e) => {
    e.preventDefault();
    hModal();
    const preparedRecipe = { ...recipeFormState };
    const response = await fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedRecipe),
    });
    const newRecipe = await response.json();
    onAddRecipe(newRecipe);
    setRecipeFormState(initialRecipeState);
  };

  return (
    <div>
      <form className="selection:bg-blue-200 flex flex-col gap-2 text-center">
        <h1 className="text-3xl">Add a recipe</h1>

        <fieldset className="flex flex-col">
          <label htmlFor="title">Recipe Title</label>
          <input
            onChange={handleInputChange}
            value={recipeFormState.title}
            type="text"
            name="title"
            id="title"
            className="bg-white border-4 focus:outline-none p-2"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="description">Recipe Description</label>
          <input
            onChange={handleInputChange}
            value={recipeFormState.description}
            type="text"
            name="description"
            id="description"
            className="bg-white border-4 focus:outline-none p-2"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="imageSrc">Image URL</label>
          <input
            onChange={handleInputChange}
            value={recipeFormState.imageSrc}
            type="text"
            name="imageSrc"
            id="imageSrc"
            className="bg-white border-4 focus:outline-none p-2"
          />
        </fieldset>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer"
          type="submit"
          onClick={handleAddRecipeFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

AddRecipeForm.propTypes = {
  hModal: PropTypes.func.isRequired,
  onAddRecipe: PropTypes.func.isRequired,
};
