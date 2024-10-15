import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (message: string, location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Call onSearch with the current message and location
    onSearch(message, location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="searchBarComponentContainer">
        <div className="searchbar-container">
          <input
            type="text"
            id="message"
            placeholder="Job title, keywords or company"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="locationbar-container">
          <input
            type="text"
            id="location"
            placeholder="Town, city or postcode"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button type="submit" id="searchBarButton">
          <i className="fa fa-search" aria-hidden="true"></i>
          <span>Search jobs</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
