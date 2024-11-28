import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import { Filter, SortAsc, Star } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";
import { Link } from "react-router";
import MovieCard from "./MovieCard";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   context
  const { setLoading } = useGlobalContext();

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://whoa.onrender.com/whoas/random?results=20"
      );
      const data = await response.json();

      setMovies(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    console.log(windowWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="mt-10">
      {" "}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Trending Movies</h2>

        <div className="text-black flex rounded-full items-center overflow-hidden">
          <button className=" bg-white px-3 py-2 hover:bg-black hover:text-white rounded-l-full">
            <SortAsc />
          </button>
          <div>|</div>
          <button className=" bg-white px-3 py-2 hover:bg-black hover:text-white rounded-r-full">
            <Filter />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Swiper
          spaceBetween={10}
          slidesPerView={windowWidth < 768 ? 2.5 : 6}
          onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          {movies.map(({ movie, poster, year }, el) => {
            return (
              <SwiperSlide key={el}>
                <MovieCard poster={poster} movie={movie} year={year} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingMovies;
