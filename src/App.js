import React, { useState } from 'react';
import './App.css';

function App() {
  const [style, setStyle] = useState({});

  const handleMouseEnter = () => {
    const positions = [
      { x: Math.random() * -100, y: Math.random() * 150 },
      { x: Math.random() * 50, y: Math.random() * -200 },
      { x: Math.random() * -200, y: Math.random() * 100 },
      { x: Math.random() * 150, y: Math.random() * -50 },
    ];

    const newPosition = positions[Math.floor(Math.random() * positions.length)];
    setStyle({
      transform: `translate(${newPosition.x}%, ${newPosition.y}%) scale(1.6)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({});
  };

  const handleLinkClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="App font-link">
      <header className="App-header">
        <nav className="top-navigation">
          <button
            className="top-navigation-button"
            onClick={() => handleLinkClick('/')}
          >
            Link 1
          </button>
          <button
            className="top-navigation-button"
            onClick={() => handleLinkClick('https://example.com/link2')}
          >
            Link 2
          </button>
          <button
            className="top-navigation-button"
            onClick={() => handleLinkClick('https://example.com/link3')}
          >
            Link 3
          </button>
        </nav>
        <p
          className="text"
          style={style}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleLinkClick('https://twitter.com/notqrime')}
        >
          qrime is coming
        </p>
      </header>
    </div>
  );
}

export default App;