import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api, getImageUrl } from "../services/api";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: movie, isLoading: isLoadingMovie } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => api.getMovieDetails(id!),
  });

  const { data: credits, isLoading: isLoadingCredits } = useQuery({
    queryKey: ["movieCredits", id],
    queryFn: () => api.getMovieCredits(id!),
  });

  if (isLoadingMovie || isLoadingCredits) {
    return (
      <div className="container mx-auto pt-20">
        <div className="animate-pulse">
          <div className="h-[400px] bg-gray-200 rounded-lg mb-8" />
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-8" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-20 px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img
            src={getImageUrl(movie?.poster_path)}
            alt={movie?.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{movie?.title}</h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full">
              {movie?.vote_average.toFixed(1)}
            </span>
            <span>{movie?.release_date}</span>
            <span>{movie?.runtime} min</span>
          </div>
          <p className="text-lg mb-8">{movie?.overview}</p>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Cast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {credits?.cast.slice(0, 6).map((actor) => (
                <div key={actor.id} className="text-center">
                  <img
                    src={getImageUrl(actor.profile_path)}
                    alt={actor.name}
                    className="w-full rounded-lg mb-2"
                  />
                  <p className="font-medium">{actor.name}</p>
                  <p className="text-sm text-gray-600">{actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;