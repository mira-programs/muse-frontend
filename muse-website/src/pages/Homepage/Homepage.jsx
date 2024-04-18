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
    // Fetch the tag list from backend or define statically if not dynamic
    setTags(['Science Fiction', 'Fantasy', 'Gaming', 'Anime', 'Cartoon', 'Fanfiction',
             'Horror', 'Biography', 'Thriller', 'Minimalism', 'Expressionsim', 
             'Impressionism', 'Pop Art', 'Renaissance', 'Abstract', 'Modern', 
             'Romance', 'Adventure', 'History', 'Technology', 'Futurism']);
}, []);

const handleAddTag = (tag) => {
    if (!selectedTags.includes(tag)) {
        setSelectedTags([...selectedTags, tag]);
    }
  }
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
