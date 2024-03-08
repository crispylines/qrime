import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    window.open('https://twitter.com/notqrime', '_blank');
  };

  return (
    <div className="App font-link">
      <header className="App-header">
        <p className="zoom-on-hover" onClick={handleClick}>
          qrime is coming....
        </p>
        <hr/>
        <p>Have you seen?</p>
      </header>
    </div>
  );
}

export default App;