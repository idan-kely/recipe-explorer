import { useState } from 'react';
import mockData from './mockRecipes.json';
import './App.css';

function App() {
  const [recipes] = useState(mockData);

  return (
    <div className="app-container">
      <header>
        <h1>🍳 Recipe Explorer</h1>
      </header>

      <main>
        <h2>Available Recipes (Task 1: Local Mock)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', padding: '20px 0' }}>
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', borderRadius: '6px' }} />
              <h3>{recipe.strMeal}</h3>
              <p>{recipe.strCategory} | {recipe.strArea}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;