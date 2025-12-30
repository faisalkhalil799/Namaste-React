import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <img src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
