import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Context from "../utils/Context";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";

const Layout = () => {
  const [loggedInUser, setLoggedInUser] = useState("Faisal Khalil");

  return (
    <Provider store={appStore}>
      <Context.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">
            <Outlet />
          </main>

          <Footer />
        </div>
      </Context.Provider>
    </Provider>
  );
};

export default Layout;
