import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
]);
