import PropTypes from "prop-types";

const Delete = ({ recipe, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      onDelete(recipe.id);
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500 font-bold">
      Delete
    </button>
  );
};

Delete.propTypes = {
  recipe: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Delete;
