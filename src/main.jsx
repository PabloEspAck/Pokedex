import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonDetails from "./Components/PokemonDetails";

const Router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/pokemon/:id", element: <PokemonDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);