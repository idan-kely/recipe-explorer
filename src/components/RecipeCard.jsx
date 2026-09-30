export default function RecipeCard({ recipe, onSelectRecipe, isSelected }) {
  return (
    <div
      className={`recipe-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectRecipe(recipe)}
    >
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory}</p>
    </div>
  );
}