import { useState, useEffect } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // טעינת מועדפים מ-localStorage בעליית האפליקציה
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('recipe_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // שמירה ל-localStorage בכל פעם שרשימת המועדפים משתנה
  useEffect(() => {
    localStorage.setItem('recipe_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipes from server');
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data.meals || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // סינון כפול: גם לפי החיפוש וגם לפי מועדפים
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.strMeal
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFavorite = showFavoritesOnly
      ? favorites.includes(recipe.idMeal)
      : true;
    return matchesSearch && matchesFavorite;
  });

  return (
    <div className="app-container">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalCount={filteredRecipes.length}
        showFavoritesOnly={showFavoritesOnly}
        onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
        favoritesCount={favorites.length}
      />

      <main className="main-layout">
        {loading && <p className="status-message">Loading recipes...</p>}

        {error && <p className="status-message error">{error}</p>}

        {!loading && !error && (
          <>
            <RecipeList
              recipes={filteredRecipes}
              selectedRecipe={selectedRecipe}
              onSelectRecipe={setSelectedRecipe}
            />
            <RecipeDetail
              recipe={selectedRecipe}
              onClose={() => setSelectedRecipe(null)}
              isFavorite={selectedRecipe ? favorites.includes(selectedRecipe.idMeal) : false}
              onToggleFavorite={toggleFavorite}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;