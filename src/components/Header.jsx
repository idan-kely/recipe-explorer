export default function Header({
  searchTerm,
  onSearchChange,
  totalCount,
  showFavoritesOnly,
  onToggleFavorites,
  favoritesCount,
}) {
  return (
    <header className="header">
      <h1>Recipe Explorer</h1>
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button
          className={`favorites-filter-btn ${showFavoritesOnly ? 'active' : ''}`}
          onClick={onToggleFavorites}
          title="Filter favorites"
        >
          {showFavoritesOnly ? 'Show All' : `❤️ Favorites (${favoritesCount})`}
        </button>
      </div>
      <div className="search-counter">
        Showing <strong>{totalCount}</strong> recipes
      </div>
    </header>
  );
}