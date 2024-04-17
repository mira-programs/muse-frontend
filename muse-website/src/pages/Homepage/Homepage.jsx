import React, { useState, useEffect } from 'react';
import './Homepage.css';
import Posts from '../../components/Posts/Posts';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMode, setSearchMode] = useState('users');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch('/api/tags'); //fetch tags from backend
      const data = await response.json();
      setTags(data);
    };

    fetchTags();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchModeChange = (mode) => {
    setSearchMode(mode);
    setSearchTerm('');
  };

  const handleTagSelect = (event) => {
    setSearchTerm(event.target.value);
    setSearchMode('tags');
  };

  return (
    <div>
      <div className="search-bar-container">
        {searchMode === 'users' ? (
          <input
            className="search-bar"
            type="text" 
            placeholder="Search Users..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        ) : (
          <select
            className="search-bar"
            value={searchTerm}
            onChange={handleTagSelect}
          >
            <option value="">Select a tag...</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        )}
        <div className="search-mode-toggle">
          <select
            value={searchMode}
            onChange={(e) => handleSearchModeChange(e.target.value)}
          >
            <option value="users">Search by user</option>
            <option value="tags">Search by post</option>
          </select>
        </div>
      </div>

      <div className="userPosts-container">
        <Posts searchTerm={searchTerm} searchMode={searchMode} />
      </div>
    </div>
  );
};

export default Homepage;
