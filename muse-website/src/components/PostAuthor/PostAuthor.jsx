import { Link } from 'react-router-dom'

export default function PostAuthor({muserID}) {
  return (
    <Link to={`/posts/user/${muserID}`} className='post-author'>
        <div className="post-author-image">
            <img src="" alt="" />
        </div>
        <div className="post-author-info">
            <h5>Lana White</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}
