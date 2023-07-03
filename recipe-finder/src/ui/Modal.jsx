import { useState } from "react";

import recipes from "../utils/Recipes";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setRecipeTitle("");
    setRecipeDescription("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      title: recipeTitle,
      imageSrc: "https://example.com/placeholder-image.jpg", // Replace with the actual image URL
      description: recipeDescription,
    };
    const updatedRecipes = [...recipes, newRecipe];
    console.log("Updated recipes:", updatedRecipes);
    handleModalClose();
  };

  return (
    <div className="ml-[10px]">
      <button
        type="button"
        className=" hover:text-white border border-blue-700 hover:bg-blue-800 
        focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-4 ml-2 dark:border-teal-500 
        dark:text-teal-500 dark:hover:text-white dark:hover:bg-yellow-500 "
        onClick={handleModalOpen}
      >
        Add a Recipe
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-6 z-50">
            <h2 className="text-xl font-bold mb-4">Add Recipe</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="recipeTitle" className="block font-medium mb-1">
                  Recipe Title
                </label>
                <input
                  type="text"
                  id="recipeTitle"
                  value={recipeTitle}
                  onChange={(event) => setRecipeTitle(event.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="recipeDescription" className="block font-medium mb-1">
                  Recipe Description
                </label>
                <textarea
                  id="recipeDescription"
                  value={recipeDescription}
                  onChange={(event) => setRecipeDescription(event.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-800 mr-2"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md"
                >
                  Add Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;