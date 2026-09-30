import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes, selectedRecipe, onSelectRecipe }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          isSelected={selectedRecipe?.idMeal === recipe.idMeal}
          onSelectRecipe={onSelectRecipe}
        />
      ))}
    </div>
  );
}