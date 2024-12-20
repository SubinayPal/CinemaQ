import { Link } from "react-router-dom";
import { getImageUrl } from "../services/api";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
}

export const MovieCard = ({
  id,
  title,
  posterPath,
  releaseDate,
  voteAverage,
}: MovieCardProps) => {
  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <img
        src={getImageUrl(posterPath)}
        alt={title}
        className="w-full h-[300px] object-cover rounded-lg"
        loading="lazy"
      />
      <div className="movie-card-content">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between mt-2 text-sm">
          <span>{new Date(releaseDate).getFullYear()}</span>
          <span className="bg-yellow-400 text-black px-2 py-0.5 rounded">
            {voteAverage.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
};