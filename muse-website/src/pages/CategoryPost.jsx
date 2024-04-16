// UseState
import { useState } from 'react'
// Post items
import PostItem from '../components/PostItem/PostItem'

export default function CategoryPost() {
  const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className="categoryPost">
      <h1 className="page-title">Category Posts</h1>
      { posts.length > 0 ? <div className="container categoryPost-container">
            {
              posts.map(({id,Image, muserID, category, title, des}, index)=> <PostItem key={index} Image={Image} category={category} muserID={muserID} title={title} des={des} postID={id} />)
            }
          </div> : <h2 className="error-center">No posts found</h2> }
    </section>
  )
}
