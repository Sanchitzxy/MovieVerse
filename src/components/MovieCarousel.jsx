import React from 'react';
import MovieCard from './MovieCard';

const MovieCarousel = ({ title, movies, onMovieClick }) => {
  return (
    <div className="mb-16 relative">
      {/* Carousel Header */}
      <div className="flex items-center justify-between mb-8 px-8">
        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>
      </div>
      
      {/* Carousel Container */}
      <div className="carousel-container relative">
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-8 py-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDetailsClick={onMovieClick}
            />
          ))}
        </div>
        
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-netflix-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-netflix-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MovieCarousel;
