export default function RecipeDetail({ recipe, onClose }) {
  if (!recipe) {
    return (
      <div className="recipe-detail empty-state">
        <p>Select a recipe from the list to view instructions</p>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <button className="close-btn" onClick={onClose}>
        Close ✕
      </button>

      <h2>{recipe.strMeal}</h2>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="detail-img"
      />

      <div className="detail-tags">
        <span className="tag">Category: {recipe.strCategory}</span>
        <span className="tag">Area: {recipe.strArea}</span>
      </div>

      <h3>Instructions:</h3>
      <p className="instructions-text">{recipe.strInstructions}</p>
    </div>
  );
}