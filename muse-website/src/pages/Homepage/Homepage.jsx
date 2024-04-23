import React, { useState, useEffect } from 'react';
import { CgSearch } from "react-icons/cg";
import './Homepage.css';
import Posts from '../../components/Posts/Posts';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMode, setSearchMode] = useState('users');
  const [tags, setTags] = useState([]);
  const [searchInitiated, setSearchInitiated] = useState(false);

  useEffect(() => {
    // Fetch the tag list from backend or define statically if not dynamic
    setTags(['Science Fiction', 'Fantasy', 'Gaming', 'Anime', 'Cartoon', 'Fanfiction',
             'Horror', 'Biography', 'Thriller', 'Minimalism', 'Expressionsim', 
             'Impressionism', 'Pop Art', 'Renaissance', 'Abstract', 'Modern', 
             'Romance', 'Adventure', 'History', 'Technology', 'Futurism']);
  }, []);
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchModeChange = (mode) => {
    setSearchMode(mode);
    setSearchTerm('');
  };

  const handleTagSelect = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedTags(selectedOptions);
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
            <option value="users">User</option>
            <option value="tags">Post</option>
          </select>
        </div>
        <button className="search-icon" onClick={() => setSearchInitiated(true)}><CgSearch /></button>
      </div>

      <div>
      <Link to = {'/chats'}> chats </Link>
      </div>

      <div className="userPosts-container">
        <Posts searchTerm={searchTerm} searchMode={searchMode} searchInitiated={searchInitiated} setSearchInitiated={setSearchInitiated}/>
      </div>
    </div>
  );
};

export default Homepage;
