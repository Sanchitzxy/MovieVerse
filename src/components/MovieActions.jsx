import React, { useState } from 'react';
import { recommendationEngine } from '../data/recommendations';

const MovieActions = ({ movie, onClose }) => {
  const [rating, setRating] = useState(recommendationEngine.userData.ratings[movie.id] || 0);
  const [isInWatchlist, setIsInWatchlist] = useState(
    recommendationEngine.userData.watchlist.includes(movie.id)
  );

  const handleRate = (newRating) => {
    setRating(newRating);
    recommendationEngine.rateMovie(movie.id, newRating);
  };

  const handleWatchlistToggle = () => {
    if (isInWatchlist) {
      recommendationEngine.removeFromWatchlist(movie.id);
    } else {
      recommendationEngine.addToWatchlist(movie.id);
    }
    setIsInWatchlist(!isInWatchlist);
  };

  const handleWatch = (watchTime = 1.0) => {
    recommendationEngine.addToHistory(movie.id, watchTime);
    onClose();
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Rating Section */}
      <div>
        <h4 className="text-white font-semibold mb-2">Rate this movie:</h4>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map(star => (
            <button
              key={star}
              onClick={() => handleRate(star)}
              className={`text-2xl transition-colors ${
                star <= rating ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-300'
              }`}
            >
              ⭐
            </button>
          ))}
          {rating > 0 && (
            <span className="text-white ml-2">{rating}/5</span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => handleWatch(1.0)}
          className="bg-netflix-red text-white px-6 py-3 rounded hover:bg-red-600 transition-colors flex items-center"
        >
          ▶ Watch Now
        </button>
        
        <button
          onClick={() => handleWatch(0.3)}
          className="border border-gray-400 text-white px-6 py-3 rounded hover:bg-gray-700 transition-colors"
        >
          ▶ Watch Trailer
        </button>
        
        <button
          onClick={handleWatchlistToggle}
          className={`px-6 py-3 rounded transition-colors ${
            isInWatchlist
              ? 'bg-yellow-600 text-white hover:bg-yellow-700'
              : 'border border-gray-400 text-white hover:bg-gray-700'
          }`}
        >
          {isInWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
        </button>
      </div>

      {/* Quick Actions */}
      <div className="flex space-x-2">
        <button
          onClick={() => handleWatch(0.1)}
          className="text-gray-400 hover:text-white text-sm"
        >
          Mark as Watched
        </button>
        <span className="text-gray-400">•</span>
        <button
          onClick={() => handleWatch(0.5)}
          className="text-gray-400 hover:text-white text-sm"
        >
          Half Watched
        </button>
      </div>
    </div>
  );
};

export default MovieActions;
