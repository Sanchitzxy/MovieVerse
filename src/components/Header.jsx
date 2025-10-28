import React, { useState } from 'react';

const Header = ({ onSearch, user, onLogin, onLogout, onProfile }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-netflix-black backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-12">
          <h1 className="text-3xl font-bold text-netflix-red">
            MovieVerse
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition-colors duration-300 font-medium text-lg">Home</a>
            <a href="#movies" className="text-white hover:text-gray-300 transition-colors duration-300 font-medium text-lg">Movies</a>
            <a href="#tv" className="text-white hover:text-gray-300 transition-colors duration-300 font-medium text-lg">TV Shows</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-6">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-netflix-red w-64 border border-gray-700 placeholder-gray-400"
            />
            <button
              type="submit"
              className="btn-premium text-white px-6 py-3 rounded-r-lg transition-all duration-300"
            >
              Search
            </button>
          </form>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">Welcome, {user.name}</span>
              <button
                onClick={onProfile}
                className="btn-secondary text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                Profile
              </button>
              <button
                onClick={onLogout}
                className="btn-premium text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onLogin}
              className="btn-premium text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
