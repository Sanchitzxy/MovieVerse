import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Featured Movie Header */}
      <div className="featured-header">
        <img
          src="https://image.tmdb.org/t/p/w500/6P2cjp6A7k0kllkVIHXZ6XpniR2.jpg"
          alt="Birds of Prey"
          className="featured-thumbnail"
        />
        <div>
          <div className="featured-title">Birds of Prey</div>
          <div className="featured-views">1.2 m Views</div>
        </div>
        <div className="action-buttons">
          <button className="action-btn">🔖</button>
          <button className="action-btn">➕</button>
          <button className="action-btn">➡️</button>
        </div>
      </div>
      
      {/* Featured Movie Poster */}
      <div
        className="featured-poster"
        style={{
          backgroundImage: 'url(https://image.tmdb.org/t/p/w500/h4VB6m0RwcicVZbJXwX6wVx2T9M.jpg)'
        }}
      >
        <button className="play-button">▶</button>
      </div>
      
      {/* Movie Details */}
      <div className="movie-details">
        <div className="detail-item">
          <div className="detail-icon">🕐</div>
          <span>2.10h</span>
        </div>
        <div className="detail-item">
          <div className="detail-icon">⭐</div>
          <span>7.8</span>
        </div>
        <div className="detail-item">
          <div className="detail-icon">📅</div>
          <span>January 25, 2020</span>
        </div>
      </div>
      
      {/* Popular Movies Section */}
      <div className="popular-section">
        <div className="popular-header">
          <div className="popular-title">
            Popular Movies
            <span>▼</span>
          </div>
          <button className="action-btn">➡️</button>
        </div>
        
        <div className="movies-grid">
          <div className="movie-card">
            <img
              src="https://image.tmdb.org/t/p/w500/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg"
              alt="Sonic"
              className="movie-poster"
            />
            <div className="movie-overlay">
              <button className="overlay-btn">▶</button>
              <button className="overlay-btn">➕</button>
            </div>
          </div>
          
          <div className="movie-card">
            <img
              src="https://image.tmdb.org/t/p/w500/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg"
              alt="Dolittle"
              className="movie-poster"
            />
          </div>
          
          <div className="movie-card">
            <img
              src="https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"
              alt="The Call of the Wild"
              className="movie-poster"
            />
          </div>
          
          <div className="movie-card">
            <img
              src="https://image.tmdb.org/t/p/w500/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg"
              alt="The Gentlemen"
              className="movie-poster"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
