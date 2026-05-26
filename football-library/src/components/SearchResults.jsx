import { ListGroup, Image } from "react-bootstrap";
// Du importerar Bootstrap-komponenter som du kan använda i JSX.
// I just detta fall använder du inte ListGroup eller Image längre,
// men det gör inget – du kan ta bort dem om du vill.

const SearchResults = ({ results, type, onSelect }) => {
  // Du tar emot tre props:
  // results = array med spelare eller lag
  // type = "player" eller "team" (bestämmer vad som ska visas)
  // onSelect = funktion som körs när man klickar på ett resultat

  if (!results || results.length === 0) {
    // Om results är undefined/null eller tom array → visa text
    return <p className="text-muted mt-3">No results found...</p>;
  }

  return (
    <ul className="list-group mt-3">
      {/* Du loopar igenom alla resultat med map */}
      {results.map((item) => (
        <li
          key={item.id} 
          // key behövs för att React ska hålla koll på varje rad i listan

          className="list-group-item d-flex align-items-center"
          // Bootstrap-klasser som gör listan snygg och horisontellt alignad

          onClick={() => onSelect(item)}
          // När man klickar på en rad → skicka tillbaka objektet till föräldern

          style={{ cursor: "pointer" }}
          // Gör så att muspekaren blir en hand (klickbar)
        >
          {item.image && (
            // Detta betyder: om item.image finns → visa bilden
            <img
              src={item.image}
              alt=""
              width={50}
              height={50} 
              // OBS: length finns inte som attribut – du menar nog "height"

              className="rounded-circle me-3"
              // Gör bilden rund + margin-right
            />
          )}

          <div>
            <h5 className="mb-1">
              {/* Om det är en spelare → visa item.name
                  Om det är ett lag → visa item.teamName */}
              {type === "player" ? item.name : item.teamName}
            </h5>

            <small className="text-muted">
              {/* Samma sak här: olika info beroende på typ */}
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

export default SearchResults;
// Exporterar komponenten så att andra filer kan importera den
