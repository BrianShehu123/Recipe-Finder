import { useState } from "react";
import recipes from "../Recipes";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mx-auto my-8 min-h-screen">
      <div>
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Welcome to Tasty Delights</h1>
        <p className="text-xl text-center">These are recipes that I have made throughout my years of cooking .</p>

        <div className="mt-8">
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search recipes"
              value={searchTerm}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
            />

          </div>

          <h2 className="text-2xl font-bold mb-4 ml-5 text-gray-800">Featured Recipes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRecipes.map((recipe, index) => (
              <div key={index} className="bg-white rounded shadow p-4">
                <h3 className="text-lg font-bold mb-4">{recipe.title}</h3>
                <img
                  className="rounded w-full mb-4 shadow object-cover object-center h-56 sm:h-64 md:h-80"
                  src={recipe.imageSrc}
                  alt={recipe.title}
                />
                <p>{recipe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;