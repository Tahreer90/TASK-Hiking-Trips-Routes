import React from 'react';

function SearchBar({ setQuery }) {
  return (
    <center>
      <input
        type="search"
        id="form1"
        class="form-control"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </center>
  );
}

export default SearchBar;
