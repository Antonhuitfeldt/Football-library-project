import Carousel from "react-bootstrap/Carousel";
import "./PlayerCarousel.css";

const messi = "https://placehold.co/400x500?text=Messi";
const ronaldo = "https://placehold.co/400x500?text=Ronaldo";
const mbappe = "https://placehold.co/400x500?text=Mbappe";

const PlayerCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={messi}
          alt="Messi"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={ronaldo}
          alt="Ronaldo"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={mbappe}
          alt="Mbappe"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default PlayerCarousel;