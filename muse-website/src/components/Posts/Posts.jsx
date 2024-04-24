import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from '../PostItem/PostItem'; 

const Posts = ({ searchMode, searchTerm, searchInitiated }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, [searchTerm, searchMode, searchInitiated]);

    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = 'http://localhost:8080/posts'; // Base URL for fetching all posts

        if (searchInitiated) {  
          url = '/search'; 
          const payload = {
            ...(searchMode === 'users' ? { username: searchTerm } : { tags: searchTerm.split(', ').map(tag => tag.trim()) })
          };
          const response = await axios.post(url, payload);
          setPosts(response.data);
        } else {
          const response = await axios.get(url);
          setPosts(response.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error.message);
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


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