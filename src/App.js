import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Shirts from './Shirts'; // Import the Shirts component

function App() {
  return (
    <Router>
      <div className="App font-link">
        <header className="App-header">
          <p>qrime is coming...</p>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shirts">Shirts</Link>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/shirts" component={Shirts} />
          {/* Define other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;