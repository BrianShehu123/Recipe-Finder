import { useState } from "react";
import PropTypes from "prop-types";

const Editing = ({ recipe, updateRecipe, cancelEditing }) => {
  Editing.propTypes = {
    recipe: PropTypes.object.isRequired,
    updateRecipe: PropTypes.func.isRequired,
    cancelEditing: PropTypes.func.isRequired,
  };

  const [description, setDescription] = useState(recipe.description);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const saveChanges = () => {
    const updatedRecipe = { ...recipe, description };
    updateRecipe(updatedRecipe);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Editing Recipe: {recipe.title}</h3>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        className="border border-gray-300 rounded-md p-2 mb-4"
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        onClick={saveChanges}
      >
        Save
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={cancelEditing}
      >
        Cancel
      </button>
    </div>
  );
};

export default Editing;