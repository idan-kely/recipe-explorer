export default function RecipeDetail({ recipe, onClose, isFavorite, onToggleFavorite }) {
  if (!recipe) {
    return (
      <div className="recipe-detail empty-state">
        <p>Select a recipe from the list to view ingredients and cooking instructions</p>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure ? measure.trim() : '',
      });
    }
  }

  return (
    <div className="recipe-detail">
      <div className="detail-actions">
        <button
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={() => onToggleFavorite(recipe.idMeal)}
        >
          {isFavorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
        </button>
        <button className="close-btn" onClick={onClose}>
          Close ✕
        </button>
      </div>

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

      {ingredients.length > 0 && (
        <div className="ingredients-section">
          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            {ingredients.map((item, index) => (
              <li key={index} className="ingredient-item">
                <span className="ingredient-measure">{item.measure}</span>
                <span className="ingredient-name">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <h3>Instructions</h3>
      <p className="instructions-text">{recipe.strInstructions}</p>
    </div>
  );
}