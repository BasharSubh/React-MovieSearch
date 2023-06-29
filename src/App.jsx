import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(null);


  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const options = {
        method: 'GET',
        url: 'https://react-moviesearch.onrender.com/data',
        params: { q: searchQuery }   
      };

      try {
        const response = await axios.request(options);
        setData(response.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    clearTimeout(timer);

    if (searchQuery) {
      const timeout = setTimeout(() => {
        fetchData();
      }, 1000);

      setTimer(timeout);
    }
  }, [searchQuery]);

  return (
    <>
      <header className="header">
      <a href="/" style={{ textDecoration: 'none' }}>
          <h1>Movie, Actor Search App</h1>
        </a>
      </header>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter movie name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="search-button" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <div className="container">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((movie, index) => (
            <div className="movie-item" key={index}>
              {movie.i && movie.i.imageUrl && <img src={movie.i.imageUrl} alt={movie.l} />}
              <p className="title">{movie.l}</p>
              <p className="stars">{movie.s}</p>
              <p className="year">{movie.y}</p>
            </div>
          ))
        ) : (
          <div className="message-container">
           <p className="message">
             {searchQuery.length < 1 ? 'Please type a movie name' : 'No movies found'}
           </p>
          </div>
        )}
      </div>

      <footer className="footer">
        <p>
          &copy; 2023 React Movie Search App. |{' '}
          <a
            href="https://github.com/BasharSubh/React-MovieSearch"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
