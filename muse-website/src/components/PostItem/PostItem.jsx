import { Link } from 'react-router-dom'
import PostAuthor from '../PostAuthor/PostAuthor'

export default function PostItem({Image, muserId, tag, title, des, postID}) {

    const shorTitle = title.length > 40 ? title.substr(0, 30) + '...' : title;
    const shorDes = des.length > 145 ? des.substr(0, 145) + '...' : des;

  return (
    <article className="post">
        <div className="post-image">
            <img src={Image} alt="" />
        </div>
        <div className="post-content">
          <Link to={`posts/${postID}`}>
            <h3>{shorTitle}</h3>
          </Link>
          <p>{shorDes}</p>
          <div className="post-footer">
            <PostAuthor muserID/>
            <Link to={`/posts/categories/${tag}`} className="btn btn-category">{tag}</Link>
          </div>
        </div>
    </article>
  )
}