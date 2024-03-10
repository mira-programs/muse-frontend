// Dummy-posts-data
import { DummyPosts } from '../data/data'
// UseState
import { useState } from 'react'
// Post items
import PostItem from '../components/PostItem'

export default function CreatePost() {
  const [posts, setPosts] = useState(DummyPosts)
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
