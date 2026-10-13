export default function RecipeDetail({ recipe, onClose, isFavorite, onToggleFavorite }) {
  if (!recipe) {
    return (
      <div className="recipe-detail empty-state">
        <p>Select a recipe from the list to view ingredients and cooking instructions</p>
      </div>
    );
  }

  // איסוף המצרכים
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

  // חלוקת ההוראות לשלבים נקיים ומחוברים היטב
  let steps = [];
  if (recipe.strInstructions) {
    const lines = recipe.strInstructions
      .split(/\r?\n+/)
      .map((l) => l.trim())
      .filter((l) => {
        if (!l) return false;
        // סינון שורות שהן רק מספר
        if (/^\d+[\s.:-]*$/.test(l)) return false;
        // סינון שורות שהן רק STEP X
        if (/^step\s*\d+[:.-]*$/i.test(l)) return false;
        return true;
      });

    // מעבר על השורות וחיבור כותרות (כמו "Pro Tips:") למשפט שבא אחריהן
    const mergedLines = [];
    for (let i = 0; i < lines.length; i++) {
      let current = lines[i];

      // אם השורה מסתיימת בנקודתיים או שהיא קצרה מאוד ויש שורה אחריה - נאחד אותה עם השורה הבאה
      if (
        (current.endsWith(':') || current.length < 15) &&
        i + 1 < lines.length &&
        !/^\d+$/.test(lines[i + 1])
      ) {
        mergedLines.push(`${current} ${lines[i + 1]}`);
        i++; // מדלגים על השורה הבאה כי איחדנו אותה
      } else {
        mergedLines.push(current);
      }
    }

    steps = mergedLines
      .map((line) =>
        line
          .replace(/^step\s*\d+[:.-]?\s*/i, '') // מנקה Step 1:
          .replace(/^\d+[\s.:-]+\s*/, '') // מנקה 1.
          .trim()
      )
      .filter((line) => line.length > 5); // מסנן שורות קצרות וריקות

    // אם קיבלנו פסקה אחת ארוכה בלי ירידות שורה
    if (steps.length === 1 && steps[0].length > 150) {
      steps = steps[0]
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 15);
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
      {steps.length > 0 ? (
        <ol className="instructions-steps">
          {steps.map((stepText, index) => (
            <li key={index} className="instruction-step-item">
              <span className="step-badge">Step {index + 1}</span>
              <p className="step-text">{stepText}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p className="instructions-text">{recipe.strInstructions}</p>
      )}
    </div>
  );
}