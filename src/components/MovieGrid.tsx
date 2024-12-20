import { MovieCard } from "./MovieCard";
import { Pagination } from "./Pagination";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MovieGridProps {
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export const MovieGrid = ({
  movies,
  currentPage,
  totalPages,
  onPageChange,
  isLoading,
}: MovieGridProps) => {
  if (isLoading) {
    return (
      <div className="movie-grid">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="loading-skeleton h-[300px] rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="page-transition">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};