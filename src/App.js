import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    window.open('https://twitter.com/notqrime', '_blank');
  };

  return (
    <div className="App font-link">
      <header className="App-header">
        <div className="text-container">
          <p className="text" onClick={handleClick}>
            qrime is coming....
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;