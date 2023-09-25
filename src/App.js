
import './App.css';
import { useHistory } from 'react-router-dom';
import RedirectButton from './RedirectButton';

function RedirectButton() {
  const history = useHistory();

  const handleClick = () => {
    // Redirect to a different page (e.g., '/new-page')
    history.push('/new-page');
  };

  return (
    <button onClick={handleClick}>
      Go to New Page
    </button>
  );
}

function App() {
  return (
    <div className="App font-link">
      <header className="App-header">
        <p>
          qrime is coming...
        </p>
        <RedirectButton />
      </header>
    </div>
  );
}

export default App;
