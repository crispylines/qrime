import React, { useState } from 'react';
import './App.css';

function App() {
  const [isButtonOnFire, setIsButtonOnFire] = useState(false);

  const handleMouseEnter = () => {
    setIsButtonOnFire(true);
  };

  const handleMouseLeave = () => {
    setIsButtonOnFire(false);
  };

  const handleLinkClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="App font-link">
      <header className="App-header">
        <nav className="top-navigation">
          <button
            className={`top-navigation-button ${isButtonOnFire ? 'on-fire' : ''}`}
            onClick={() => handleLinkClick('/one')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            qrime
          </button>
          {/* <button
            className="top-navigation-button"
            onClick={() => handleLinkClick('/two')}
          >
            qrime
          </button> */}
        </nav>
        <p
          className="text"
          onClick={() => handleLinkClick('https://twitter.com/notqrime')}
        >
          qrime is coming
        </p>
      </header>
    </div>
  );
}

export default App;