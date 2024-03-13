// UseState
import { useState, useEffect } from 'react'
// Post items
import PostItem from '../components/PostItem'

export default function CreatePost() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/posts');  //ADD BACKEND ENDPOINT!!
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="createPost">
      { posts.length > 0 ? <div className="container createPost-container">
            {
              posts.map(({id,Image, muserID, category, title, des}, index)=> <PostItem key={index} Image={Image} category={category} muserID={muserID} title={title} des={des} postID={id} />)
            }
          </div> : <h2 className="error-center">No posts found</h2> }
    </section>
  )
}