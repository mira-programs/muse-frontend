// Router link
import { Link } from 'react-router-dom'
//Components
import PostAuthor from '../components/PostAuthor'
// PostDetail image
import postDetailImage from '../assets/moneydrop.jpg'

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
        <h1>idk</h1>
        <div className="postdetail-image">
          <img src={postDetailImage} alt="" />
        </div>
        <div className="postdetail-para">
        <p>
          write write write write
        </p>
        <p>
          write write write write
        </p>
        <p>
          write write write write
        </p>
        <p>
          write write write write
        </p>

        </div>
      </div>
    </section>
  )
}