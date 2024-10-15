import React, { useState, useEffect } from 'react';
import './SearchBox.css'

interface SearchBoxProps {
  onSearch: (message: string, location: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState('');
  const [isStack, setIsStack] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(message, location);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsStack(windowWidth <= 960); // Change to your desired breakpoint
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <>
      <div className={`searchBoxComponentContainer ${isStack ? 'stacked' : ''}`}>
        <div className="searchbox-container">
          <input
            type="text"
            id="message"
            placeholder="Job title, keywords or company"
            value={message}
            onChange={(e) => setMessage(e.target.value)} />
        </div>

        <div className="locationbox-container">
          <input
            type="text"
            id="location"
            placeholder="Town, city or postcode"
            value={location}
            onChange={(e) => setLocation(e.target.value)} />
        </div>

        <button id="searchBoxButton" /*onclick="sendMessage()"*/>
          <i className="fa fa-search" aria-hidden="true"></i>
          <span> Search jobs</span>
        </button>
      </div>
    </>
  );
};
