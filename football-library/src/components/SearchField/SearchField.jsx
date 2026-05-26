import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchField() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Search for player or team</Form.Label>
        <Form.Control type="text" placeholder="Enter player or team" />
      </Form.Group>

      <Button variant="success" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchField;