import './PostItem.css'
import { Link } from 'react-router-dom'
import PostAuthor from '../PostAuthor/PostAuthor'

export default function PostItem({Image, muserId, tags, title, des, postID}) {

    const shorTitle = title.length > 40 ? title.substr(0, 30) + '...' : title;
    const shortDes = des.length > 145 ? des.substr(0, 145) + '...' : des;

  return (
    <article className="post">
        <div className="post-image">
            <img src={Image} alt="" />
        </div>
        <div className="post-content">
          <Link to={`posts/${postID}`}>
            <h3>{shorTitle}</h3>
          </Link>
          <p>{shortDes}</p>
          <div className="post-footer">
            <PostAuthor muserID={muserId}/>
            {tags && tags.length > 0 && (
                    <div className="post-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{typeof tag === 'string' ? tag : tag.name}</span>
                        ))}
                    </div>
            )}
          </div>
        </div>
    </article>
  )
}