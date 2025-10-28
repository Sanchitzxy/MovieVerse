import React from 'react';

const MovieCard = ({ movie, onDetailsClick }) => {
  return (
    <div className="flex-shrink-0 w-48 mx-3 group cursor-pointer">
      <div className="movie-card relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450/333333/ffffff?text=No+Image';
          }}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={() => onDetailsClick(movie)}
            className="btn-premium text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
          >
            ▶ Details
          </button>
        </div>
        
        {/* Movie Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 transition-all duration-300">
          <h3 className="text-white font-bold text-sm truncate mb-1">{movie.title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-300 text-xs">{movie.year}</p>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400 text-sm">⭐</span>
              <span className="text-white text-xs font-semibold">{movie.rating}</span>
            </div>
          </div>
          {movie.reason && (
            <p className="text-netflix-red text-xs mt-1 font-medium">{movie.reason}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
