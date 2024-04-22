import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    image: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const author = localStorage.getItem('userEmail'); // Fetch the email from local storage
    if (!author) {
      console.error("No email found, user isn't logged in");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', postData.title);
      formData.append('content', postData.content);
      formData.append('author', author); // Use 'author' as the key
      if (postData.image) {
        formData.append('image', postData.image);
      }
      const response = await axios.post('http://localhost:8080/posts', {...postData, email}, { // Include the email in the post data
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Post created successfully', response.data);
      navigate('/home'); // Redirect or update state after successful post creation
    } catch (error) {
      console.error('Failed to create post');
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
        <textarea className="createpost-textarea"
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
        <button type="submit" className='button'>Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;