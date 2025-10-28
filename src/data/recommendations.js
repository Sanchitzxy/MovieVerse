// Recommendation algorithm and user data management
import { movies } from './movies';

// User preferences and viewing history
export const userData = {
  preferences: {
    favoriteGenres: [],
    favoriteActors: [],
    favoriteDirectors: [],
    preferredRatings: [],
    watchTime: 'any' // 'short', 'medium', 'long', 'any'
  },
  viewingHistory: [],
  ratings: {},
  watchlist: [],
  recommendations: []
};

// Genre mapping for better categorization
export const genreMap = {
  'Action': ['thriller', 'adventure', 'crime'],
  'Sci-Fi': ['fantasy', 'mystery', 'thriller'],
  'Drama': ['romance', 'biography', 'history'],
  'Crime': ['thriller', 'mystery', 'drama'],
  'Comedy': ['romance', 'family', 'animation'],
  'Horror': ['thriller', 'mystery', 'supernatural'],
  'Romance': ['drama', 'comedy', 'family'],
  'Thriller': ['mystery', 'crime', 'action'],
  'Adventure': ['action', 'family', 'fantasy'],
  'Fantasy': ['adventure', 'family', 'romance']
};

// Recommendation strategies
export class RecommendationEngine {
  constructor() {
    this.movies = movies;
    this.userData = userData;
  }

  // Get personalized recommendations based on user data
  getPersonalizedRecommendations(userId = 'default') {
    const strategies = [
      this.getGenreBasedRecommendations(),
      this.getRatingBasedRecommendations(),
      this.getSimilarMoviesRecommendations(),
      this.getTrendingRecommendations(),
      this.getPopularRecommendations()
    ];

    // Combine and deduplicate recommendations
    const allRecommendations = strategies.flat();
    const uniqueRecommendations = this.deduplicateRecommendations(allRecommendations);
    
    // Score and rank recommendations
    const scoredRecommendations = this.scoreRecommendations(uniqueRecommendations);
    
    return scoredRecommendations.slice(0, 12); // Return top 12
  }

  // Strategy 1: Genre-based recommendations
  getGenreBasedRecommendations() {
    if (this.userData.preferences.favoriteGenres.length === 0) {
      return this.getPopularRecommendations();
    }

    const genreMovies = this.movies.filter(movie => 
      this.userData.preferences.favoriteGenres.includes(movie.genre)
    );

    return genreMovies.map(movie => ({
      ...movie,
      reason: `Similar to your favorite ${movie.genre} movies`,
      score: 0.8
    }));
  }

  // Strategy 2: Rating-based recommendations
  getRatingBasedRecommendations() {
    const userRatedMovies = Object.keys(this.userData.ratings);
    if (userRatedMovies.length === 0) return [];

    const avgRating = Object.values(this.userData.ratings).reduce((a, b) => a + b, 0) / userRatedMovies.length;
    const highRatedMovies = this.movies.filter(movie => 
      parseFloat(movie.rating) >= avgRating && 
      !userRatedMovies.includes(movie.id.toString())
    );

    return highRatedMovies.map(movie => ({
      ...movie,
      reason: `High-rated movie (${movie.rating}⭐)`,
      score: 0.7
    }));
  }

  // Strategy 3: Similar movies (content-based filtering)
  getSimilarMoviesRecommendations() {
    const viewedMovies = this.userData.viewingHistory;
    if (viewedMovies.length === 0) return [];

    const similarMovies = [];
    
    viewedMovies.forEach(viewedMovie => {
      const movie = this.movies.find(m => m.id === viewedMovie.id);
      if (!movie) return;

      // Find movies with similar genre
      const similar = this.movies.filter(m => 
        m.genre === movie.genre && 
        m.id !== movie.id &&
        !viewedMovies.some(v => v.id === m.id)
      );

      similar.forEach(sim => {
        similarMovies.push({
          ...sim,
          reason: `Similar to ${movie.title}`,
          score: 0.6
        });
      });
    });

    return similarMovies;
  }

  // Strategy 4: Trending recommendations
  getTrendingRecommendations() {
    // Simulate trending by mixing high-rated and recent movies
    const trending = this.movies
      .filter(movie => parseFloat(movie.rating) >= 8.5)
      .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
      .slice(0, 6);

    return trending.map(movie => ({
      ...movie,
      reason: 'Trending now',
      score: 0.9
    }));
  }

  // Strategy 5: Popular recommendations
  getPopularRecommendations() {
    const popular = this.movies
      .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
      .slice(0, 8);

    return popular.map(movie => ({
      ...movie,
      reason: 'Popular choice',
      score: 0.5
    }));
  }

  // Deduplicate recommendations
  deduplicateRecommendations(recommendations) {
    const seen = new Set();
    return recommendations.filter(rec => {
      if (seen.has(rec.id)) return false;
      seen.add(rec.id);
      return true;
    });
  }

  // Score recommendations based on multiple factors
  scoreRecommendations(recommendations) {
    return recommendations.map(rec => {
      let score = rec.score || 0;

      // Boost score for user's favorite genres
      if (this.userData.preferences.favoriteGenres.includes(rec.genre)) {
        score += 0.3;
      }

      // Boost score for high ratings
      if (parseFloat(rec.rating) >= 8.5) {
        score += 0.2;
      }

      // Boost score for movies not yet viewed
      if (!this.userData.viewingHistory.some(h => h.id === rec.id)) {
        score += 0.1;
      }

      return { ...rec, score };
    }).sort((a, b) => b.score - a.score);
  }

  // Update user preferences
  updateUserPreferences(preferences) {
    this.userData.preferences = { ...this.userData.preferences, ...preferences };
  }

  // Add movie to viewing history
  addToHistory(movieId, watchTime = 0) {
    const movie = this.movies.find(m => m.id === movieId);
    if (!movie) return;

    const historyEntry = {
      id: movieId,
      title: movie.title,
      watchedAt: new Date().toISOString(),
      watchTime,
      completed: watchTime > 0.8 // Consider completed if watched >80%
    };

    // Remove if already exists and add to beginning
    this.userData.viewingHistory = this.userData.viewingHistory.filter(h => h.id !== movieId);
    this.userData.viewingHistory.unshift(historyEntry);

    // Keep only last 50 entries
    this.userData.viewingHistory = this.userData.viewingHistory.slice(0, 50);
  }

  // Rate a movie
  rateMovie(movieId, rating) {
    this.userData.ratings[movieId] = rating;
    
    // Update favorite genres based on ratings
    this.updateFavoriteGenres();
  }

  // Update favorite genres based on user ratings
  updateFavoriteGenres() {
    const genreRatings = {};
    
    Object.entries(this.userData.ratings).forEach(([movieId, rating]) => {
      const movie = this.movies.find(m => m.id === parseInt(movieId));
      if (movie && rating >= 4) { // Only consider ratings 4+ as positive
        genreRatings[movie.genre] = (genreRatings[movie.genre] || 0) + rating;
      }
    });

    // Get top 3 genres
    const favoriteGenres = Object.entries(genreRatings)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([genre]) => genre);

    this.userData.preferences.favoriteGenres = favoriteGenres;
  }

  // Add to watchlist
  addToWatchlist(movieId) {
    if (!this.userData.watchlist.includes(movieId)) {
      this.userData.watchlist.push(movieId);
    }
  }

  // Remove from watchlist
  removeFromWatchlist(movieId) {
    this.userData.watchlist = this.userData.watchlist.filter(id => id !== movieId);
  }

  // Get continue watching (movies with partial watch time)
  getContinueWatching() {
    return this.userData.viewingHistory
      .filter(entry => entry.watchTime > 0 && entry.watchTime < 0.8)
      .slice(0, 6)
      .map(entry => {
        const movie = this.movies.find(m => m.id === entry.id);
        return movie ? { ...movie, watchProgress: entry.watchTime } : null;
      })
      .filter(Boolean);
  }

  // Get watchlist movies
  getWatchlistMovies() {
    return this.userData.watchlist
      .map(movieId => this.movies.find(m => m.id === movieId))
      .filter(Boolean);
  }
}

// Create singleton instance
export const recommendationEngine = new RecommendationEngine();
