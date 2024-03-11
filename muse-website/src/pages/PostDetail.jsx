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
        <h1>money 2.0</h1>
        <div className="postdetail-image">
          <img src={postDetailImage} alt="" />
        </div>
        <div className="postdetail-para">
        <p>
          never gonna give you up never gonna let you down never gonna turn around and forget you
        </p>
        <p>
          never gonna give you up never gonna let you down never gonna turn around and forget you
        </p>
        <p>
          never gonna give you up never gonna let you down never gonna turn around and forget you
        </p>
        <p>
          never gonna give you up never gonna let you down never gonna turn around and forget you
        </p>
        <p>
          never gonna give you up never gonna let you down never gonna turn around and forget you
        </p>
        <p>
          never gonna give you up never gonna let you down never gonna turn around and forget you
        </p>

        </div>
      </div>
    </section>
  )
}