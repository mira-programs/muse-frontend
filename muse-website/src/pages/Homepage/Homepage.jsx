import React, { useState, useEffect } from 'react';
import './Homepage.css';
import Posts from '../../components/Posts/Posts';
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';

function Homepage() {
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

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
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:8080/search', {
                params: {
                    type: 'tags',
                    query: selectedTags.join(',')
                }
            });
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    return (
        <div>
            <div className='searchbar'>
                <select onChange={(e) => handleAddTag(e.target.value)} value="">
                    <option value="">Select a tag...</option>
                    {tags.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>
            <div>
                <input 
                    type="text" 
                    value={selectedTags.join(', ')} 
                    readOnly
                />
                <button className='search-icon' onClick={handleSearch}>Search</button>
            </div>
            <div>
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map(post => (
                            <li key={post._id}>{post.title}</li>
                        ))}
                    </ul>
                ) : <p>No results found</p>}
            </div>
        </div>
    );
}

export default Homepage;