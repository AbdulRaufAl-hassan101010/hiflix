import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const MovieCard = ({
  poster,
  movie,
  year,
}: {
  poster: string;
  movie: string;
  year: number;
}) => {
  return (
    <div>
      <Link
        to={`/movie/${movie}`}
        className="w-full h-[290px] rounded-lg overflow-hidden"
      >
        <img
          src={poster}
          alt="a"
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>
      <div className="mt-3">
        <span className="text-sm">
          {movie?.length > 15 ? movie.slice(0, 20) + "..." : movie}
        </span>
      </div>
      <div className="flex gap-x-1 items-center">
        <span className="text-xs flex gap-x-1">
          <Star fill="gold" color="gold" size={15} /> 4.5
        </span>
        | <span className="text-xs"> ({year})</span>
      </div>
    </div>
  );
};

export default MovieCard;
