import {Button, Form, Alert} from 'react-bootstrap';
import { useState } from 'react';

/*
- Search component that validates user input,
- Displays an error message for empty searches,
- Submits valid search queries
*/
const SearchField = ({ onSearchSubmit }) => {
  const [searchString, setSearchString] = useState("");
  const [showError, setShowError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedSearch = searchString.trim();
    
    if (trimmedSearch.length === 0) {
      setShowError(true)
      
      return;
    }
    
    setShowError(false)
    onSearchSubmit(trimmedSearch);
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      {showError && (
          <Alert variant="danger">
            Searchfield is empty!
          </Alert>
      )}
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