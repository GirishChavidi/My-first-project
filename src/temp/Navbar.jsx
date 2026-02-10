const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="navbar">
        <h1 className="heading">JobFinder</h1>
      <input 
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="nav-search"
      />
    </nav>
  );
};

export default Navbar;
