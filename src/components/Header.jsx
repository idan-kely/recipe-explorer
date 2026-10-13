export default function Header({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  totalCount,
  showFavoritesOnly,
  onToggleFavorites,
  favoritesCount,
  darkMode,
  onToggleDarkMode,
}) {
  return (
    <header className="header">
      <div className="header-top-row">
        <h1>Recipe Explorer</h1>
        <button
          className="theme-toggle-btn"
          onClick={onToggleDarkMode}
          title="Toggle Dark/Light Mode"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      <div className="controls-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button
          className={`favorites-filter-btn ${showFavoritesOnly ? 'active' : ''}`}
          onClick={onToggleFavorites}
          title="Filter favorites"
        >
          {showFavoritesOnly ? 'Show All' : `Favorites (${favoritesCount})`}
        </button>
      </div>

      <div className="search-counter">
        Showing <strong>{totalCount}</strong> recipes
      </div>
    </header>
  );
}