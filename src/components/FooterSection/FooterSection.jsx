import "./FooterSection.css";
import FooterTitle from "../FooterTitle/FooterTitle";

// Displays the global footer for the application
// Contains project title, authors, and copyright
const FooterSection = () => {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        <FooterTitle />

        <div className="made-by">
          <p>Anton</p>
          <p>Emil</p>
          <p>Malte</p>
        </div>

        <div className="footer-copy">
          <p> 2026 Football Library</p>
        </div>

      </div>

    </footer>
  );
};

export default FooterSection;