import React from 'react';
import MovieActions from './MovieActions';

const MovieModal = ({ movie, isOpen, onClose, user, onMovieAction }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-netflix-gray rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450/333333/ffffff?text=No+Image';
              }}
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-yellow-400 text-lg">⭐ {movie.rating}</span>
              <span className="text-gray-300">{movie.year}</span>
              <span className="bg-netflix-red text-white px-2 py-1 rounded text-sm">
                {movie.genre}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">{movie.description}</p>
            {user ? (
              <MovieActions movie={movie} onClose={onClose} />
            ) : (
              <div className="flex space-x-4">
                <button className="bg-netflix-red text-white px-6 py-3 rounded hover:bg-red-600 transition-colors">
                  ▶ Play
                </button>
                <button className="border border-gray-400 text-white px-6 py-3 rounded hover:bg-gray-700 transition-colors">
                  + My List
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
