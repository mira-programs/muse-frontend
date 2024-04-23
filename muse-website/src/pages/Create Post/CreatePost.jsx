import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTags(['Science Fiction', 'Fantasy', 'Gaming', 'Anime', 'Cartoon', 'Fanfiction',
             'Horror', 'Biography', 'Thriller', 'Minimalism', 'Expressionism', 
             'Impressionism', 'Pop Art', 'Renaissance', 'Abstract', 'Modern', 
             'Romance', 'Adventure', 'History', 'Technology', 'Futurism']);
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleTagSelect = (selectedOption) => {
    setSelectedTags(selectedOption);
    const selectedValues = selectedOption.map(option => option.value);
    setSearchTerm(selectedValues.join(', '));
    setSearchMode('tags');
  }

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
    formData.append('tags', JSON.stringify(selectedTags));

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
        <select
          isMulti
          name="tags"
          value={tags}
          onChange={handleTagSelect}
        >
          {tags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
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
