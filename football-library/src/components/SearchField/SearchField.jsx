import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

const SearchField = ({ onSearchSubmit }) => {

    const [searchString, setSearchString] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    
      const trimmedSearch = searchString.trim();
    
      if (trimmedSearch.length === 0) {
        console.log("Search string is empty");
        return;
      }
    
      onSearchSubmit(trimmedSearch);
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Search for player</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter full player name"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)} 
          />
        </Form.Group>
  
        <Button variant="success" type="submit">
          Search
        </Button>
      </Form>
    );
  };

export default SearchField;