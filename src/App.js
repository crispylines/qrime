import React, { useState } from 'react';
import './App.css';

function App() {
  const [isButtonOnFire, setIsButtonOnFire] = useState(false);
  const [style, setStyle] = useState({});

  const handleMouseEnter = () => {
    setIsButtonOnFire(true);

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
    setIsButtonOnFire(false);
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
          style={style}
          onClick={() => handleLinkClick('https://twitter.com/notqrime')}
        >
          qrime is coming
        </p>
      </header>
    </div>
  );
}

export default App;