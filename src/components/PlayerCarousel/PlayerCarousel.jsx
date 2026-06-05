import Carousel from "react-bootstrap/Carousel";
import "./PlayerCarousel.css";

const salah = "https://wallpaperswide.com/download/mohamed_salah___liverpool-wallpaper-600x800.jpg";
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