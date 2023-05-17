
import './App.css';
import React from react 

const SocialMediaLinks = () => {
  const handleTwitterClick = () => {
    // Handle Twitter click event
    // Replace the URL with your desired Twitter link
    window.open('https://twitter.com');
  };

  const handleInstagramClick = () => {
    // Handle Instagram click event
    // Replace the URL with your desired Instagram link
    window.open('https://instagram.com');
  };


}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
        qrime.eth is building something... 
        </p>

        <div>
      <img
        src="path/to/twitter-logo.png"
        alt="Twitter Logo"
        onClick={handleTwitterClick}
      />
      <img
        src="path/to/instagram-logo.png"
        alt="Instagram Logo"
        onClick={handleInstagramClick}
      />
    </div>
       
      </header>
    </div>
  );
}

export default App;
