import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Movie from "../pages/Movie";

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
