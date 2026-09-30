export default function RecipeDetail({ recipe, onClose }) {
  if (!recipe) {
    return (
      <div className="recipe-detail placeholder">
        <p>בחר מתכון מהרשימה כדי לצפות בהוראות ההכנה</p>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <button className="close-btn" onClick={onClose}>✕ סגור</button>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>קטגוריה:</strong> {recipe.strCategory}</p>
      <p><strong>אזור:</strong> {recipe.strArea}</p>
      <h3>הוראות הכנה:</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}