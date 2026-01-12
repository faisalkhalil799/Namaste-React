import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Contact from "./components/Contact";
import ErrorBoundary from "./components/ErrorBoundary";
import About from "./components/About";
import MenuCard from "./components/MenuCard";
import FakeCard from "./components/FakeCard";
import Account from "./components/Account";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Account = lazy(() => {
  return import("./components/Account");
});
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/accountDetails",
        element: (
          <Suspense fallback={<FakeCard />}>
            <Account />
          </Suspense>
        ),
      },
      { path: "restaurant/:resId", element: <MenuCard /> },
    ],
  },
]);
root.render(
  <>
    <RouterProvider router={routes} />
  </>
);
