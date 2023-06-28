import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipes, setRecipes] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setRecipeTitle("");
    setRecipeDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title: recipeTitle,
      imageSrc: "",
      description: recipeDescription,
    };
    closeModal();
  };

  return (
    <div className="ml-[10px]">
      <button
        type="button"
        className="hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none 
        focus:ring-yellow-300 text-sm px-5 py-2.5 text-center mr-2 mb-4 ml-2  dark:hover:bg-yellow-500 "
        onClick={openModal}
      >
        Add a Recipe
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Add a Recipe</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-1">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  value={recipeTitle}
                  onChange={(e) => setRecipeTitle(e.target.value)}
                  className="border border-gray-300 px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block mb-1">
                  Description:
                </label>
                <textarea
                  id="description"
                  value={recipeDescription}
                  onChange={(e) => setRecipeDescription(e.target.value)}
                  className="border border-gray-300 px-3 py-2 w-full"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 mr-4"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
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
