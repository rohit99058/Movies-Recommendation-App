import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MovieDetails from "../Pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />,
  },
]);

export default router;
