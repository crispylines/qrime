import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

function App() {
  return (
    <div className="App font-link">
      <header className="App-header">
        <p>
          qrime is coming...
        </p>
        {/* Add a navigation link */}
        <nav>
          <ul>
            <li>
              <Link to="/another-page">Go to Another Page</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;