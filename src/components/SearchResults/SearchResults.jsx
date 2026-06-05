import { ListGroup } from "react-bootstrap";
import ResultCard from "../ResultCard/ResultCard";
import "./SearchResults.css";

const SearchResults =({ results, onTeamClick }) => {
  if (!results || results.length === 0) {
    return 
  }

  if (results[0].type === "player") {
    return (
      <p className="text-danger mt-3">You can only search for teams</p>
    );
  }

  const topResultType = results[0].type;

  const listToShow = results.filter(item => item.type === topResultType);

  return (
    <div>
      <h2 className="search-result-title">Teams</h2>
      <ListGroup className="mt-3">
        {listToShow.map((item) => (
          <ResultCard
            key={item.id}
            item={item}
            keyName="favoriteTeams"
            onClick={() => onTeamClick(item.id)}
          />
        ))}
      </ListGroup>
    </div>
  );
};


export default SearchResults;
// Exporterar komponenten så att andra filer kan importera den
