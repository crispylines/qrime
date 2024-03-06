import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    window.open('https://twitter.com/crispylines', '_blank');
  };

  return (
    <div className="App font-link">
      <header className="App-header">
        <p className="zoom-on-hover" onClick={handleClick}>
          qrime is coming....
        </p>
        <div className="stars"></div>
      </header>
    </div>
  );
}

export default App;