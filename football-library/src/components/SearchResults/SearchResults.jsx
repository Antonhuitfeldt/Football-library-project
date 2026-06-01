import { ListGroup } from "react-bootstrap";
import "./SearchResults.css";

const SearchResults =({ results, onTeamClick }) => {
  if (!results || results.length === 0) {
    return 
  }

  if (results[0].type === "player") {
    return (
      <p className="text-danger mt-3">You can only search fot teams</p>
    );
  }

  const topResultType = results[0].type;

  const listToShow = results.filter(item => item.type === topResultType);

  return (
    <div>
      <h2 className="search-result-title">Teams</h2>
      <ListGroup className="mt-3">
        {listToShow.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex align-items-center search-result-item mb-3" onClick={() => onTeamClick(item.id)}>
            <div>
              <h5 className="mb-1">{item.name}</h5>
              <small className="text-muted">
                {item.country} ({item.countryCode}) - {item.type}
              </small>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};


export default SearchResults;
// Exporterar komponenten så att andra filer kan importera den
