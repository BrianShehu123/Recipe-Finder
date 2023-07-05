import { useState, useEffect } from "react";
import Recipe from './Recipes';
import Form from './components/AddRecipeForm';
import Modal from "./components/Modal";

export default function SectionTwo() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchRecipes() {
      const response = await fetch('http://localhost:3000/recipes');
      const recipesData = await response.json();
      console.log(recipesData);

      if (!ignore) {
        setRecipes(recipesData);
      }

      return recipesData;
    }

    fetchRecipes();

    return () => {
      ignore = true;
    }
  }, []);

  const onAddRecipe = (newRecipe) => {
    hideModal();
    setRecipes((prevRecipes) => {[...prevRecipes, newRecipe]});
  };



 const recipeLayout = recipes.map((recipe) => {
  return <Recipe key={recipe} />;
});


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  }

  const hideModal = () => {
    setIsModalVisible(false);
  }

  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          New Releases!
        </h2>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-items-center pt-14'>
          {recipeLayout}
          <Modal
            isVisible={isModalVisible}
            hideModal={hideModal}
          >
            <Form hModal={hideModal} onAddRecipe={onAddRecipe} />
          </Modal>
        </div>
        <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={showModal}>
          Add Recipe!!
        </button>
      </div>
    </section>
  );
}
