import { useState, useEffect, useMemo } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // מצב Dark Mode שמור ב-localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('recipe_dark_mode') === 'true';
  });

  // החלת class של Dark Mode על אלמנט הבסיס ושמירה ב-localStorage
  useEffect(() => {
    localStorage.setItem('recipe_dark_mode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  // מועדפים שמורים ב-localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('recipe_favorites');
    return saved ? JSON.parse(saved) : [];
  });

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

  // חילוץ רשימת קטגוריות ייחודיות מתוך המתכונים שהתקבלו
  const categories = useMemo(() => {
    const cats = recipes.map((r) => r.strCategory).filter(Boolean);
    return Array.from(new Set(cats)).sort();
  }, [recipes]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // סינון משולב: חיפוש טקסטואלי, קטגוריה ומועדפים
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.strMeal
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || recipe.strCategory === selectedCategory;
    const matchesFavorite = showFavoritesOnly
      ? favorites.includes(recipe.idMeal)
      : true;
    return matchesSearch && matchesCategory && matchesFavorite;
  });

  return (
    <div className="app-container">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
        totalCount={filteredRecipes.length}
        showFavoritesOnly={showFavoritesOnly}
        onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
        favoritesCount={favorites.length}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
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