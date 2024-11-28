import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import BaseLayout from "../layouts/BaseLayout";
import { useGlobalContext } from "../context/GlobalContext";
import { PlayIcon, Star } from "lucide-react";
import TrendingMovies from "../components/TrendingMovies";
import Button from "../components/Button";

const Movie = () => {
  const { movie: movieId } = useParams();
  const [movie, setMovie] = React.useState<any>(null);
  const navigate = useNavigate();

  // globlal context
  const { setLoading } = useGlobalContext();

  const fetchMovie = async () => {
    try {
      // display loader
      setLoading(true);

      const response = await fetch(
        `https://whoa.onrender.com/whoas/random?movie=${movieId}`
      );

      const data = await response.json();

      console.log(data);
      setMovie(data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      // hide loader
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [window.location.pathname]);

  return (
    <BaseLayout>
      <main className="container mx-auto mt-10 px-5">
        {!movie ? (
          // not found message
          <div className="text-center mt-10">
            <h2 className="text-2xl">Movie not found</h2>
            <div className="mt-10">
              <Button onClick={() => navigate("/")} text="Go back" />
            </div>
          </div>
        ) : (
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="w-full md:w-2/6">
              <img
                src={movie?.poster}
                alt="Movie"
                className="w-full h-[380px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-4/6 ">
              <h1 className="text-4xl font-bold">{movie?.movie}</h1>
              <div className="text-gray-400">
                <p>
                  <span>Director:</span> {movie?.director}
                </p>
                <p>
                  <span>Realease Date:</span> {movie?.release_date}
                </p>
                <p>
                  <span>Duration:</span> {movie?.movie_duration}
                </p>
                <p>
                  <span>Casts:</span> {movie?.movie_duration}
                </p>
                <div className=" flex items-center gap-x-1">
                  <span className="">Rating:</span>{" "}
                  <div className="flex items-center gap-x-1">
                    <Star fill="gold" color="gold" size={15} />
                    <span>{"  "} 3.5</span>
                  </div>
                </div>
                <div className="mt-5">
                  <Button
                    text={
                      <div>
                        <PlayIcon size={20} className="inline-block" /> Watch
                        Now
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <TrendingMovies />
      </main>
    </BaseLayout>
  );
};

export default Movie;
