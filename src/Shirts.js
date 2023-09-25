import React from 'react';
import { useHistory } from 'react-router-dom';

function Shirts() {
  const history = useHistory();

  const handleClick = () => {
    // Open a new link when the button is clicked (change the URL to your desired link)
    window.open('https://example.com', '_blank');
  };

  return (
    <div className="shirts-page">
      <button className="black-button" onClick={handleClick}>
        Open Link
      </button>
    </div>
  );
}

export default Shirts;