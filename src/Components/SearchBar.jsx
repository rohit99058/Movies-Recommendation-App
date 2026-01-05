function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
