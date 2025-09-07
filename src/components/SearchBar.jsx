import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    if (onSearch && term.trim()) {
      onSearch(term);
    }
  };

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search" 
          placeholder="Enter A Song, Album, or Artist"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" onClick={handleSearch}>SEARCH</Button>
      </Form>
    </div>
  );
}

export default SearchBar;