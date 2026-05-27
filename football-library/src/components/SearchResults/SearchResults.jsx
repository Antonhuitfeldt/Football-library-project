import { ListGroup, Image } from "react-bootstrap";
import "./SearchResults.css";

const SearchResults =({ results }) => {
  if (!results || results.length === 0) {
    return <p className="text-muted mt-3">No results found...</p>;
  }

  const topResultType = results[0].type;

  const listToShow = results.filter(item => item.type === topResultType);

  return (
    <ListGroup className="mt-3">
      {listToShow.map((item) => (
        <ListGroup.Item key={item.id} className="d-flex align-items-center">
          <div>
            <h5 className="mb-1">{item.name}</h5>
            <small className="text-muted">
              {item.country} ({item.countryCode}) - {item.type}
            </small>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};


export default SearchResults;
// Exporterar komponenten så att andra filer kan importera den
