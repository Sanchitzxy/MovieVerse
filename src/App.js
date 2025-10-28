import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="app-container">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}

export default App;
