import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import About from "./components/About";
import "./App.css";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};
const ProtectedRoute = ({ element, path }) => {
  const shouldRender = isAuthenticated();
  return shouldRender ? (
    element
  ) : (
    <div style={{ paddingLeft: 10 }}>
      <p>
        Please signin to view this page... <a href="/">Login</a>
      </p>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/about",
    element: <ProtectedRoute element={<About />} />,
  },
  {
    path: "/products",
    element: <ProtectedRoute element={<Products />} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
