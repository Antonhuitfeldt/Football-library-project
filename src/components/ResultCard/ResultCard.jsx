import "./ResultCard.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const ResultCard = ({ item, keyName, onClick }) => {

  const countryName =
    typeof item.country === "string"
      ? item.country
      : item.country?.name || "Unknown";

  const countryCode =
    item.countryCode ||
    item.country?.alpha2 ||
    "";

  const type =
    item.type ||
    (item.position ? "player" : "team");

  return (
    <div
      className="result-card d-flex align-items-center search-result-item mb-3"
      onClick={onClick}
    >
      <div className="flex-grow-1">
        <div className="card-text">
            <h5 className="mb-1">{item.name}</h5>
            <small className="text-muted">
            {countryName} ({countryCode}) - {type}
            </small>
        </div>
      </div>

      <div className="ms-3">
        <FavoriteButton item={item} keyName={keyName} />
      </div>
    </div>
  );
};

export default ResultCard;
