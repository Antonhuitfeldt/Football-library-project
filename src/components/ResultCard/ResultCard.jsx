import "./ResultCard.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

// a card to display the information about a certain team or player
const ResultCard = ({ item, keyName, onClick }) => {

  const countryName =
    typeof item.country === "string"
      ? item.country
      : item.country?.name || "Unknown";

  return (
    <div
      className="result-card d-flex align-items-center search-result-item mb-3"
      onClick={onClick}
    >
      <div className="flex-grow-1 d-flex align-items-center">

  {item.flag && (
    <img
      src={item.flag}
      alt={countryName}
      className="country-flag"
    />
  )}

  <div className="card-text">
    <h5 className="mb-1">{item.name}</h5>
    <small className="text-muted">
      {countryName}
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
