import React, { useState } from 'react';
import './Homepage.css';
import Posts from '../../components/Posts/Posts';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="homepage">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Posts searchTerm={searchTerm} />
    </div>
  );
};

export default Homepage;
