import React, { useState, useEffect } from 'react';
import { recommendationEngine, userData } from '../data/recommendations';

const UserProfile = ({ user, onClose, onUpdatePreferences }) => {
  const [preferences, setPreferences] = useState({
    favoriteGenres: userData.preferences.favoriteGenres,
    watchTime: userData.preferences.watchTime
  });
  const [viewingHistory, setViewingHistory] = useState(userData.viewingHistory);
  const [ratings, setRatings] = useState(userData.ratings);

  useEffect(() => {
    setViewingHistory(userData.viewingHistory);
    setRatings(userData.ratings);
  }, []);

  const genres = ['Action', 'Sci-Fi', 'Drama', 'Crime', 'Comedy', 'Horror', 'Romance', 'Thriller', 'Adventure', 'Fantasy'];

  const handleGenreToggle = (genre) => {
    const newGenres = preferences.favoriteGenres.includes(genre)
      ? preferences.favoriteGenres.filter(g => g !== genre)
      : [...preferences.favoriteGenres, genre];
    
    setPreferences({ ...preferences, favoriteGenres: newGenres });
  };

  const handleSavePreferences = () => {
    recommendationEngine.updateUserPreferences(preferences);
    onUpdatePreferences(preferences);
    onClose();
  };

  const handleRateMovie = (movieId, rating) => {
    recommendationEngine.rateMovie(movieId, rating);
    setRatings({ ...ratings, [movieId]: rating });
  };

  const getMovieTitle = (movieId) => {
    const movie = recommendationEngine.movies.find(m => m.id === movieId);
    return movie ? movie.title : 'Unknown Movie';
  };

  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-netflix-gray rounded-lg max-w-4xl w-full max-h-90vh overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white">Your Profile</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Preferences Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Preferences</h3>
              
              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2">
                  Favorite Genres
                </label>
                <div className="flex flex-wrap gap-2">
                  {genres.map(genre => (
                    <button
                      key={genre}
                      onClick={() => handleGenreToggle(genre)}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        preferences.favoriteGenres.includes(genre)
                          ? 'bg-netflix-red text-white'
                          : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2">
                  Preferred Watch Time
                </label>
                <select
                  value={preferences.watchTime}
                  onChange={(e) => setPreferences({ ...preferences, watchTime: e.target.value })}
                  className="w-full px-3 py-2 bg-netflix-black border border-gray-600 rounded text-white"
                >
                  <option value="any">Any Length</option>
                  <option value="short">Short (under 90 min)</option>
                  <option value="medium">Medium (90-150 min)</option>
                  <option value="long">Long (over 150 min)</option>
                </select>
              </div>

              <button
                onClick={handleSavePreferences}
                className="bg-netflix-red text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Save Preferences
              </button>
            </div>

            {/* Viewing History Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Viewing History</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {viewingHistory.length === 0 ? (
                  <p className="text-gray-400">No viewing history yet</p>
                ) : (
                  viewingHistory.slice(0, 10).map((entry, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-800 p-2 rounded">
                      <div>
                        <p className="text-white text-sm">{entry.title}</p>
                        <p className="text-gray-400 text-xs">
                          {new Date(entry.watchedAt).toLocaleDateString()}
                          {entry.watchTime > 0 && (
                            <span className="ml-2">
                              {Math.round(entry.watchTime * 100)}% watched
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button
                            key={star}
                            onClick={() => handleRateMovie(entry.id, star)}
                            className={`text-sm ${
                              ratings[entry.id] >= star ? 'text-yellow-400' : 'text-gray-400'
                            }`}
                          >
                            ⭐
                          </button>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Recommendations Preview */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Your Recommendations</h3>
            <p className="text-gray-400 mb-4">
              Based on your preferences and viewing history
            </p>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
              {recommendationEngine.getPersonalizedRecommendations().slice(0, 6).map(movie => (
                <div key={movie.id} className="flex-shrink-0 w-32">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-48 object-cover rounded"
                  />
                  <p className="text-white text-xs mt-2 truncate">{movie.title}</p>
                  <p className="text-gray-400 text-xs">{movie.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
