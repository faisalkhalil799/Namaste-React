import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnelineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const userStatus = useOnelineStatus();
  return (
    <header className="header-container">
      <div className="logo">
        <img src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>{userStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
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
