import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      {/* Header */}
      <h1 className="teal-green text-2xl font-bold mb-6">movies</h1>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search here"
          className="search-bar"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
      </div>
      
      {/* Navigation Menu */}
      <ul className="nav-menu">
        <li className="nav-item">
          <div className="nav-icon">📺</div>
          <span>TV</span>
        </li>
        <li className="nav-item active">
          <div className="nav-icon">🎬</div>
          <span>Movies</span>
          <span className="new-tag">New</span>
        </li>
        <li className="nav-item">
          <div className="nav-icon">👨‍👩‍👧‍👦</div>
          <span>Family</span>
        </li>
        <li className="nav-item">
          <div className="nav-icon">🧒</div>
          <span>Kids</span>
        </li>
        <li className="nav-item">
          <div className="nav-icon">📡</div>
          <span>Live</span>
        </li>
        <li className="nav-item">
          <div className="nav-icon">🎭</div>
          <span>Shows</span>
        </li>
        <li className="nav-item">
          <div className="nav-icon">🎵</div>
          <span>Music</span>
        </li>
      </ul>
      
      {/* Continue Watching */}
      <div className="continue-watching">
        <h3>Continue Watching</h3>
        <img
          src="https://image.tmdb.org/t/p/w500/2yQUnpc1BXgesJrfcdoRa6jTAnA.jpg"
          alt="Fast & Furious 9"
          className="movie-thumbnail"
        />
        <div className="movie-title">First & Furious 9</div>
        <div className="movie-year">2020</div>
      </div>
    </div>
  );
};

export default LeftSidebar;
