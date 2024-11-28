import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Link, useNavigate } from "react-router";
import { Play, TrafficCone } from "lucide-react";

type ShowcaseProps = {
  name: string;
  image: string;
  rating: number;
  year: number;
  type: string;
  duration: string;
};

const Showcase = () => {
  const [movies, setMovies] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://whoa.onrender.com/whoas/random?results=5"
      );
      const data = await response.json();

      setMovies(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full h-[300px] mt-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={windowWidth > 768 ? 2.5 : 1.5}
        onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        {movies.map(({ movie, poster }, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[270px]  flex items-center shadow-sm relative rounded-lg"
              onClick={() => navigate(`/movie/${movie}`)}
            >
              <img
                src={poster}
                alt="a"
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute left-0 bottom-0 right-0 w-full p-3 pb-5 flex justify-end flex-col bg-dark-light rounded-lg">
                <div>
                  <span className="text-xl font-semibold">{movie}</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <Link
                    to="/"
                    className="mt-1 w-[30px] h-[30px] bg-black flex justify-center items-center rounded-full"
                  >
                    <Play size={15} fill="#fff" />
                  </Link>
                  <span> Play now</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Showcase;
