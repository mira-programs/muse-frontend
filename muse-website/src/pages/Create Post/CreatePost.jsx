import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
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
  
    try {
      const response = await axios.post('http://localhost:8080/posts', formData);

      if (response.status === 201) { // Check for the status code 201 for "Created"
        console.log('Post Created:', response.data);
        // Reset form and clear the state
        setTitle('');
        setContent('');
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
        <input
          type="file"
          name="image"
          placeholder="Upload Attachment"
          // value={image}
          onChange={handleImageChange}
        />
        <button type="submit" className='button'>Create Post</button>
      </form>
    </section>
  );
};