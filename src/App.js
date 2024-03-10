import React, { useState } from 'react';
import './App.css';

function App() {
  const [style, setStyle] = useState({});

  const handleMouseEnter = () => {
    const newPositionX1 = Math.random() +50^2;
    const newPositionY1 = Math.random() -120;
    const newPositionX2 = Math.random() -50^2;
    const newPositionY2 = Math.random() +120;
    setStyle({
      transform: `translate(${newPositionX}%, ${newPositionY}%) scale(1.4)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({});
  };

  const handleClick = () => {
    window.open('https://twitter.com/notqrime', '_blank');
  };

  return (
    <div className="App font-link">
      <header className="App-header">
        <p
          className="text"
          style={style}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          qrime is coming....
        </p>
      </header>
    </div>
  );
}

export default App;