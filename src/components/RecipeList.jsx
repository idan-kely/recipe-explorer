import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes, selectedRecipe, onSelectRecipe }) {
  if (recipes.length === 0) {
    return (
      <div className="recipe-list empty-search">
        <span className="empty-search-icon">🔍</span>
        <h3>No recipes found</h3>
        <p>Try searching for a different dish name.</p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          isSelected={selectedRecipe && selectedRecipe.idMeal === recipe.idMeal}
          onSelect={() => onSelectRecipe(recipe)}
        />
      ))}
    </div>
  );
}