import "./FooterTitle.css";

// Small reusable component that displays the footer heading
// Keeps footer markup clean and separated from FooterSection
const FooterTitle = () => {
  return (
    <div className="footer-title">
      <h3>Football Library</h3>
      <p>The archive of football legends.</p>
    </div>
  );
};

export default FooterTitle;