import "./HeroSection.css";

import HeroTitle from "../HeroTitle/HeroTitle";
import PlayerCarousel from "../PlayerCarousel/PlayerCarousel";
import SearchField from "../SearchField/SearchField";

/*
- Main landing section of the app
- Displays title, search field, and optional player carousel
*/
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