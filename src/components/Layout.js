import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Context from "../utils/Context";

const Layout = () => {
  const [loggedInUser, setLoggedInUser] = useState("Faisal Khalil");

  return (
    <Context.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </Context.Provider>
  );
};

export default Layout;
