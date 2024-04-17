import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: ''
    // Include other fields as needed
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming the JWT token is stored in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found, user isn't logged in");
      // Handle not logged-in scenario
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/posts', postData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  // Include the JWT token in the Authorization header
        }
      });
      console.log('Post created successfully', response.data);
      navigate('/'); // Navigate to the homepage or posts page as needed
    } catch (error) {
      console.error('Error creating post:', error.response || error);
      // Handle errors, maybe set an error message in state and display it
    }
  };

  return (
    <section className='create-post-container'>
    <form className='form-group' onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={postData.title}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        value={postData.content}
        onChange={handleInputChange}
        required
      />
      <input
        type="file"
        name="image"
        placeholder="Upload Attachment"
        onChange={handleInputChange}
      />
      <button type="submit" className='btn'>Create Post</button>
    </form>
    </section>
  );
};

export default CreatePost;