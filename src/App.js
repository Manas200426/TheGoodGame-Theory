import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => setBeers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter beers based on the search term
  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beer Explorer</h1>
      <input
        type="text"
        placeholder="Search for beers..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="beer-container">
        {filteredBeers.map(beer => (
          <div key={beer.id} className="beer-card">
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
