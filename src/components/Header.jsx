export default function Header({ searchTerm, onSearchChange, totalCount }) {
  return (
    <header className="header">
      <h1>Recipe Explorer</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="search-counter">
        Showing <strong>{totalCount}</strong> recipes
      </div>
    </header>
  );
}