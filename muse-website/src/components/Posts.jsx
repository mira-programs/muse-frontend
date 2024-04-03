import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define a function to fetch posts from the backend
    const fetchPosts = async () => {
      try {
        // Make a GET request to your backend API endpoint
        const response = await axios.get('/api/posts'); // Replace '/api/posts' with your actual API endpoint
        // Update state with the fetched posts data
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    // Call the fetchPosts function when the component mounts
    fetchPosts();
  }, []);

  return (
    <section className="posts">
      {/* Display fetched posts */}
      {posts.length > 0 ? (
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
      ) : (
        <h2 className="error-center">No posts found</h2>
      )}
    </section>
  );
};

export default Posts;

