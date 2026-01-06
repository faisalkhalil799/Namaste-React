import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const userStatus = useOnlineStatus();

  return (
    <header className="w-full bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="text-xl font-semibold text-slate-100 tracking-wide">
            FoodHub
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-5 text-slate-300 font-medium">
            <li
              className="flex items-center gap-2 px-3 py-1 
                           bg-slate-800 rounded-full text-sm"
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  userStatus ? "bg-emerald-500" : "bg-red-500"
                }`}
              />
              {userStatus ? "Online" : "Offline"}
            </li>

            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/cart", label: "Cart" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="px-3 py-2 rounded-md 
                             hover:bg-slate-800 hover:text-white 
                             transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() =>
              setIsLoggedIn((prev) => (prev === "Logout" ? "Login" : "Logout"))
            }
            className="px-5 py-2 rounded-full font-semibold text-sm 
                       bg-emerald-600 text-white 
                       hover:bg-emerald-700 transition-colors"
          >
            {isLoggedIn}
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
