import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { MovieGrid } from "../components/MovieGrid";

const Search = () => {
  const { query } = useParams<{ query: string }>();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["searchMovies", query, page],
    queryFn: () => api.searchMovies(query!, page),
  });

  return (
    <div className="container mx-auto pt-20">
      <h1 className="text-3xl font-bold px-8 pt-4">
        Search Results for "{query}"
      </h1>
      <MovieGrid
        movies={data?.results || []}
        currentPage={page}
        totalPages={data?.total_pages || 1}
        onPageChange={setPage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Search;