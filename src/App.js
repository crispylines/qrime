import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    window.open('https://twitter.com/crispylines', '_blank');
  };

  return (
    <div className="App font-link">
      <header className="App-header">
        <p className="zoom-on-hover moving-text" onClick={handleClick}>
          qrime is coming....
        </p>
      </header>
    </div>
  );
}

export default App;