import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import PostItem from '../PostItem/PostItem'; 

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        // Check if the response contains data and it's an array
        if (response.data && Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          setError('Invalid response format');
        }
      } catch (error) {
        setError('Error fetching posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display fetched posts
  return (
    <section className="posts">
      <div className="container posts-container">
        {posts.map(post => (
          <PostItem
            key={post.id}
            Image={post.Image}
            category={post.category}
            muserID={post.muserID}
            title={post.title}
            des={post.des}
            postID={post.id}  
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;
