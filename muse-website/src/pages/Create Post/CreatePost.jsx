import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTags([
      { value: 'science_fiction', label: 'Science Fiction' },
      { value: 'fantasy', label: 'Fantasy' },
      { value: 'gaming', label: 'Gaming' },
      { value: 'anime', label: 'Anime' },
      { value: 'anime', label: 'Anime' },
      { value: 'cartoon', label: 'Cartoon' },
      { value: 'fanfiction', label: 'Fanfiction' },
      { value: 'horror', label: 'Horror' },
      { value: 'biography', label: 'Biography' },
      { value: 'thriller', label: 'Thriller' },
      { value: 'minimalist', label: 'Minimalist' },
      { value: 'expressionism', label: 'Expressionism' },
      { value: 'impressionism', label: 'Impressionism' },
      { value: 'pop_art', label: 'Pop Art' },
      { value: 'renaissance', label: 'Renaissance' },
      { value: 'abstarct', label: 'Abstract' },
      { value: 'modern', label: 'Modern' },
      { value: 'romance', label: 'Romance' },
      { value: 'adventure', label: 'Adventure' },
      { value: 'history', label: 'History' },
      { value: 'technology', label: 'Technology' },
      { value: 'futurism', label: 'Futurism' },
    ]);
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleTagSelect = (selectedOptions) => {
    setSelectedTags(selectedOptions || []); // Handle null (when no option is selected)
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error("No email found, user isn't logged in");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', userId);
    if (image) {
      formData.append('image', image);
    }
    // Convert selectedTags from { value, label } to just value and append
    selectedTags.forEach(tag => formData.append('tags', tag.value));

    try {
      const response = await axios.post('http://localhost:8080/posts', formData);
      if (response.status === 201) {
        setTitle('');
        setContent('');
        setSelectedTags([]);
        setImage(null);
        navigate('/home');
      } else {
        console.error('Failed to create post:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className='create-post-container'>
      <form className='form-group' onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <textarea
          className="createpost-textarea"
          name="content"
          placeholder="Content"
          value={content}
          onChange={handleContentChange}
          required
        />
        <Select
          isMulti
          options={tags}
          value={selectedTags}
          onChange={handleTagSelect}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
        />
        <button type="submit" className='button'>Create Post</button>
      </form>
    </section>
  );
}
