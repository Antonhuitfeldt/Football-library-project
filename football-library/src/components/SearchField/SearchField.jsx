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
          <Form.Control 
            type="text" 
            placeholder="Search for your favorite team or player here..."
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