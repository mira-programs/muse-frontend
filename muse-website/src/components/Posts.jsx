// Dummy-posts-data
import { DummyPosts } from '../data/data'

// UseState
import { useState } from 'react'

// Components
import PostItem from './PostItem'
import Headpost from './Headpost'

export default function Posts() {
    const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className="posts">
      
      { /*Head Post*/}
      <div className="heade-post-aria"><Headpost/></div>

      { posts.length > 0 ? <div className="container posts-container">
            {
              posts.map(({id,Image, muserID, category, title, des}, index)=> <PostItem key={index} Image={Image} category={category} muserID={muserID} title={title} des={des} postID={id} />)
            }
          </div> : <h2 className="error-center">No posts found</h2> }
    </section>
  )
}