import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from '../PostItem/PostItem';


const Posts = ({ searchMode, searchTerm }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchPosts();
  }, [searchTerm, searchMode]);
 
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts');
        let data = response.data;


        if (!Array.isArray(data)) {
          data = [data];
        }


        if (data.length > 0) {
          setPosts(data);
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