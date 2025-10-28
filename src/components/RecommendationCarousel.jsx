import React from 'react';
import MovieCard from './MovieCard';

const RecommendationCarousel = ({ title, movies, onMovieClick, showReason = false }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {showReason && movies.length > 0 && (
          <span className="text-gray-400 text-sm">
            {movies.length} personalized recommendations
          </span>
        )}
      </div>
      <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4">
        {movies.length === 0 ? (
          <div className="flex items-center justify-center w-full h-48 text-gray-400">
            <p>No recommendations available. Rate some movies to get personalized suggestions!</p>
          </div>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-48 mx-2 group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x450/333333/ffffff?text=No+Image';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => onMovieClick(movie)}
                    className="opacity-0 group-hover:opacity-100 bg-netflix-red text-white px-4 py-2 rounded font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    Details
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm truncate">{movie.title}</h3>
                  <p className="text-gray-300 text-xs">{movie.year} • {movie.rating} ⭐</p>
                  {showReason && movie.reason && (
                    <p className="text-netflix-red text-xs mt-1">{movie.reason}</p>
                  )}
                  {movie.score && (
                    <div className="flex items-center mt-1">
                      <div className="w-full bg-gray-600 rounded-full h-1">
                        <div 
                          className="bg-netflix-red h-1 rounded-full" 
                          style={{ width: `${movie.score * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400 ml-2">
                        {Math.round(movie.score * 100)}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecommendationCarousel;
