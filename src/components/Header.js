import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Context from "../utils/Context";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const userStatus = useOnlineStatus();
  const contextValue = useContext(Context);
  const cartItems = useSelector((state) => state.cart.items.length);
  console.log(cartItems);
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
            <li className="text-slate-100 font-semibold">
              {contextValue.loggedInUser}
            </li>

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
              { to: "/accountDetails", label: "Account" },
              { to: "/cart", label: "Cart" },
            ].map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative flex items-center gap-2 px-3 py-2 rounded-md transition-colors
        ${
          isActive
            ? "bg-rose-500 text-white"
            : "hover:bg-slate-800 hover:text-white"
        }`
                  }
                >
                  <span>{link.label}</span>

                  {link.to === "/cart" && cartItems > 0 && (
                    <span
                      className="ml-1 inline-flex h-5 min-w-5 items-center 
                     justify-center rounded-full bg-amber-500 
                     px-1 text-xs font-bold text-slate-900"
                    >
                      {cartItems}
                    </span>
                  )}
                </NavLink>
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
