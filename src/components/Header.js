import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
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
        <button
          className="login-btn"
          onClick={() => {
            isLoggedIn === "Logout"
              ? setIsLoggedIn("Login")
              : setIsLoggedIn("Logout");
          }}
        >
          {isLoggedIn}
        </button>
      </div>
    </header>
  );
};
export default Header;
