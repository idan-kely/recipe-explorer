export default function RecipeCard({ recipe, isSelected, onSelect }) {
  return (
    <div
      className={`recipe-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="card-thumb"
      />
      <div className="card-info">
        <h3>{recipe.strMeal}</h3>
        <span>{recipe.strCategory}</span>
      </div>
    </div>
  );
}