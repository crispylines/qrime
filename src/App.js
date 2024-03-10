import React, { useState } from 'react';
import './App.css';

function App() {
  const [style, setStyle] = useState({});

  const handleMouseEnter = () => {
    const positions = [
      { x: Math.random() * 25, y: Math.random() * 25 },
      { x: Math.random() * 25 + 25, y: Math.random() * 25 },
      { x: Math.random() * 25, y: Math.random() * 25 + 25 },
      { x: Math.random() * 25 + 25, y: Math.random() * 25 + 25 },
    ];

    const newPosition = positions[Math.floor(Math.random() * positions.length)];
    setStyle({
      transform: `translate(${newPosition.x}%, ${newPosition.y}%) scale(1.2)`,
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <span className="drip"></span> qrime is coming....
        </p>
      </header>
    </div>
  );
}

export default App;


// const handleMouseEnter = () => {
//   const positions = [
//     { x: Math.random() * -100, y: Math.random() * 150 },
//     { x: Math.random() * 50, y: Math.random() * -200 },
//     { x: Math.random() * -200, y: Math.random() * 100 },
//     { x: Math.random() * 150, y: Math.random() * -50 },

// export default App;