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

  useEffect(() => {
   fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => {
        if (!response.ok) {
          throw new Error('שגיאה בהבאת הנתונים מהשרת');
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

  return (
    <div className="app-container">
      <Header />

      <main className="main-layout">
        {loading && <p className="status-message">טוען מתכונים...</p>}

        {error && <p className="status-message error">{error}</p>}

        {!loading && !error && (
          <>
            <RecipeList
              recipes={recipes}
              selectedRecipe={selectedRecipe}
              onSelectRecipe={setSelectedRecipe}
            />
            <RecipeDetail
              recipe={selectedRecipe}
              onClose={() => setSelectedRecipe(null)}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;