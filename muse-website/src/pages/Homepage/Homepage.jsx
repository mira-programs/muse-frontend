import React, { useState, useEffect } from 'react';
import './Homepage.css';
import Posts from '../../components/Posts/Posts';
import Select from 'react-select';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMode, setSearchMode] = useState('users');
  const [selectedTags, setSelectedTags] = useState([]);
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

  const handleTagSelect = (selectedOption) => {
    setSelectedTags(selectedOption);
    const selectedValues = selectedOption.map(option => option.value);
    setSearchTerm(selectedValues.join(', '));
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
          <Select
            className="search-bar"
            isMulti
            value={selectedTags}
            options={tags.map(tag => ({ value: tag, label: tag }))}
            onChange={handleTagSelect}
            placeholder="Select tags..."
          />
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
