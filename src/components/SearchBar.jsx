import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    if (onSearch && term.trim()) {
      onSearch(term);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key) {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={e => setTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a song, album, or artist"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;