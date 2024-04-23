import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import PostItem from '../PostItem/PostItem'; 

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);
  
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts');
        let data = response.data;

        if (!Array.isArray(data)) {
          data = [data]; 
        }

        if (data.length > 0) {
          setPosts(data);
=======
        const response = await axios.get('/api/posts');
        // Check if the response contains data and it's an array
        if (response.data && Array.isArray(response.data)) {
          setPosts(response.data);
>>>>>>> 36f065570696933742b5a0deb36d3d1b9b3dddac
        } else {
          setError('No posts found');
        }
      } catch (error) {
        setError('Error fetching posts');
      } finally {
        setLoading(false);
      }
    };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
