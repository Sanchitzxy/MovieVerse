import React from 'react';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      {/* Header */}
      <div className="right-header">
        <button className="notification-btn">🔔</button>
        <button className="profile-btn">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
            alt="Profile"
            className="user-avatar"
          />
        </button>
      </div>
      
      {/* Quick Access */}
      <div className="quick-access">
        <button className="quick-btn active">🏠</button>
        <button className="quick-btn">❤️</button>
        <button className="quick-btn">🔥</button>
        <button className="quick-btn">⚙️</button>
      </div>
      
      {/* Stats Section */}
      <div className="stats-section">
        <h3 className="stats-title">Stats</h3>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">130</div>
            <div className="stat-label">Watch time</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">15</div>
            <div className="stat-label">Wish list</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">Pro</div>
            <div className="stat-label">Subscription</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">12</div>
            <div className="stat-label">Comments</div>
          </div>
        </div>
      </div>
      
      {/* Users Section */}
      <div className="users-section">
        <h3 className="users-title">Users</h3>
        <div className="users-row">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
            alt="User 1"
            className="user-avatar"
          />
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
            alt="User 2"
            className="user-avatar"
          />
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face"
            alt="User 3"
            className="user-avatar"
          />
          <button className="add-user-btn">➕</button>
        </div>
      </div>
      
      {/* Watchlist Section */}
      <div className="watchlist-section">
        <div className="watchlist-header">
          <h3 className="watchlist-title">Watchlist</h3>
          <a href="#" className="view-more">View more</a>
        </div>
        <div className="watchlist-movies">
          <img
            src="https://image.tmdb.org/t/p/w500/5BwqwxMEjeFtdknRV792Svo0K1v.jpg"
            alt="David Copperfield"
            className="watchlist-movie"
          />
          <img
            src="https://image.tmdb.org/t/p/w500/iUZ0UcbQJcnmJ8HQQRfLbSMTXb5.jpg"
            alt="No Time To Die"
            className="watchlist-movie"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

