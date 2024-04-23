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
             'Horror', 'Biography', 'Thriller', 'Minimalism', 'Expressionsim', 
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
    setTags(selectedOption);
    const selectedValues = selectedOption.map(option => option.value);
    setSearchTerm(selectedValues.join(', '));
    setSearchMode('tags');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId'); // Fetch the email from local storage
    if (!userId) {
      console.error("No email found, user isn't logged in");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', userId);
    if (image) {
      formData.append('imageUrls', image); // The field 'imageUrls' should match the name expected by your backend
    }
    formData.append('tags', JSON.stringify(tags));
  
    try {
      const response = await axios.post('http://localhost:8080/posts', formData);
      console.log('test1'); // to remove

      if (response.status === 201) { // Check for the status code 201 for "Created"
        console.log('Post Created:', response.data);
        // Reset form and clear the state
        setTitle('');
        setContent('');
        setTags([]);
        setImage(null); // Reset the image state
      } else {
        console.error('Failed to create post:', response.status);
      }
      console.log('Post Created:', response.data);
      navigate('/home'); // Navigate after successful creation
    } catch (error) {
      console.error('Error.');
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
        <textarea className="createpost-textarea"
          name="content"
          placeholder="Content"
          value={content}
          onChange={handleContentChange}
          required
        />
        <select
          multiple
          name="tags"
          value={tags}
          options={tags.map(tag => ({ value: tag, label: tag }))}
          onChange={handleTagSelect}
        />
        <input
          type="file"
          name="image"
          placeholder="Upload Attachment"
          onChange={handleImageChange}
        />
        <button type="submit" className='button'>Create Post</button>
      </form>
    </section>
  );
};