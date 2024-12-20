import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-semibold">
              MovieDB
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Popular
              </Link>
              <Link
                to="/top-rated"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Top Rated
              </Link>
              <Link
                to="/upcoming"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Upcoming
              </Link>
            </div>
          </div>
          <form onSubmit={handleSearch} className="relative w-full max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies..."
              className="w-full pl-4 pr-10 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};