// Router link
import { Link } from 'react-router-dom'
//Components
import PostAuthor from '../components/PostAuthor'
// PostDetail image
import postDetailImage from '../assets/brPainting1.jpeg'

export default function PostDetail() {
  return (
    <section>
      <div className="container PostDetail-container">
        <div className="postdetail-top">
          <PostAuthor />
            <div className="postdetail-buttons">
              <Link to={`/post/werwer/delete`} className="btn btn-sm btn-danger">
                Delete
              </Link>
            </div>
        </div>
        <h1>Beautiful Scenery</h1>
        <div className="postdetail-image">
          <img src={postDetailImage} alt="" />
        </div>
        <div className="postdetail-para">
        <p>
          The calm before the storm.
        </p>

        </div>
      </div>
    </section>
  )
}