import { ListGroup, Image } from "react-bootstrap";
import "./SearchResults.css";

/*
const SearchResults = ({ results, type, onSelect }) => {

  if (!results || results.length === 0) {
    // Om results är undefined/null eller tom array → visa text
    return <p className="text-muted mt-3">No results found...</p>;
  }

  return (
    <ul className="list-group mt-3">
      {results.map((item) => (
        <li
          key={item.id} 
          // key behövs för att React ska hålla koll på varje rad i listan

          className="list-group-item d-flex align-items-center search-result-item"
          // Bootstrap-klasser som gör listan snygg och horisontellt alignad

          onClick={() => onSelect(item)}
          // När man klickar på en rad → skicka tillbaka objektet till föräldern
        >
          {item.image && (
            // Detta betyder: om item.image finns → visa bilden
            <img
              src={item.image}
              alt=""
              width={50}
              height={50} 
              className="rounded-circle me-3"
              // Gör bilden rund + margin-right
            />
          )}

          <div>
            <h5 className="mb-1">
              {/* Om det är en spelare → visa item.name
                  Om det är ett lag → visa item.teamName 
              {type === "player" ? item.name : item.teamName}
            </h5>

            <small className="text-muted">
              {/* Samma sak här: olika info beroende på typ 
              {type === "player"
                ? `${item.position} – ${item.team}`
                : `${item.country} – ${item.league}`}
            </small>
          </div>
        </li>
      ))}
    </ul>
  );
};

*/

const SearchResults = ({ player }) => {
  if (!player) {
    return <p>No player searched yet.</p>;
  }

  return (
    <div className="player-result">
      <p>{JSON.stringify(player, null, 2)}</p>
    </div>
  );
};

export default SearchResults;
// Exporterar komponenten så att andra filer kan importera den
