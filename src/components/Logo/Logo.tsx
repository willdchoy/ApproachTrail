import "./Logo.css";
import logo from "/src/assets/logo.jpg";

function Logo() {
  return (
    <div className="logo header-grid-logo">
      <img src={logo} />
      <h1 aria-label="Approach Trail"></h1>
    </div>
  );
}

export default Logo;
