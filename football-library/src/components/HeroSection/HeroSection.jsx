import "./HeroSection.css";

import HeroTitle from "../HeroTitle/HeroTitle";
import PlayerCarousel from "../PlayerCarousel/PlayerCarousel";
import SearchField from "../SearchField/SearchField";

const HeroSection = ({ onSearchSubmit }) => {
  return (
    <section className="hero-section">

      <div className="hero-left">

        <HeroTitle />

        <SearchField onSearchSubmit={onSearchSubmit} />

      </div>

      <div className="hero-right">

        <PlayerCarousel />

      </div>

    </section>
  );
};

export default HeroSection;