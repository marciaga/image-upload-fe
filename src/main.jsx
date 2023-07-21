import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ImageScreen from "./ImageScreen.jsx";
import "./index.css";

const routes = [
  {
    element: <App />,
    path: "/",
  },
  {
    element: <ImageScreen />,
    path: '/images',
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
