import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ErrorBoundary from "./components/ErrorBoundary";
import About from "./components/About";
import MenuCard from "./components/MenuCard";

const root = ReactDOM.createRoot(document.getElementById("root"));

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
      { path: "restaurant/:resId", element: <MenuCard /> },
    ],
  },
]);
root.render(
  <>
    <RouterProvider router={routes} />
  </>
);
