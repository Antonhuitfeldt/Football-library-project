import Carousel from "react-bootstrap/Carousel";
import "./PlayerCarousel.css";

const salah = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SC0PGCVgleK82hh0XefPjCPDh26EqRf7_k-Qw5Xc9jq4vCOpCRseniWE&s=10";
const ronaldo = "https://cdn.yourusercontent.com/media/usercontent/puzzles/228/thumbnails/cristiano-ronaldo-prime-0a42271b-c5e6-4a1e-81fb-2340288c5ccc.jpeg";
const bruno = "https://wallpapercave.com/wp/wp6876995.jpg";

const PlayerCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={salah}
          alt="Salah"
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
          src={bruno}
          alt="Bruno"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default PlayerCarousel;