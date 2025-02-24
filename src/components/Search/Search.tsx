import "./Search.css";

function Search() {
  return (
    <div className="search header-grid-search">
      <form action="">
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for ...."
        />
      </form>
    </div>
  );
}

export default Search;
