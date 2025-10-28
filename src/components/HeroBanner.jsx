import React from 'react';

const HeroBanner = ({ featuredMovie, onMovieClick }) => {
  if (!featuredMovie) return null;

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${featuredMovie.poster})`,
          filter: 'blur(2px) brightness(0.4)'
        }}
      />
      
      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-8 lg:px-16">
        <div className="max-w-4xl">
          {/* Movie Title */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {featuredMovie.title}
          </h1>
          
          {/* Movie Info */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-gold text-2xl">⭐</span>
              <span className="text-white text-xl font-semibold">{featuredMovie.rating}</span>
            </div>
            <span className="text-gray-300 text-xl">{featuredMovie.year}</span>
            <span className="bg-electric-red text-white px-3 py-1 rounded-full text-sm font-semibold">
              {featuredMovie.genre}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-gray-200 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
            {featuredMovie.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => onMovieClick(featuredMovie)}
              className="btn-premium text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2"
            >
              <span>▶</span>
              <span>Play Now</span>
            </button>
            
            <button className="btn-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2">
              <span>ℹ</span>
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default HeroBanner;
