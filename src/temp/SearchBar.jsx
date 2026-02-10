const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
      <input 
        type="text"
        placeholder="Search jobs, companies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

