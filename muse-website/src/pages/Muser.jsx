// Muser Data
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Muser() {
  const [muser, setMuser] = useState(DummyMuser)
  return (
    <section className="muser">
        {muser.length > 0 ? <div className="container muser-container">
        {
          muser.map(({id, Image, name, posts}, index)=>{
            return <Link to={`/posts/user/${id}`} key={index} className="muser-avatar">
              <div className="muser-image">
                <img src={Image} alt="" />
              </div>
              <div className="muser-info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
        </div> : <h2 className="error-center">No User Found.</h2>}
    </section>
  )
}
