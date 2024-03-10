// Muser Data
import { useState } from "react"
import { DummyMuser } from "../data/data"
import { Link } from "react-router-dom"

export default function Muser() {
  const [muser, setMuser] = useState(DummyMuser)
  return (
    <section className="muser">
      <div className="container muser-container">
        {muser.length > 0 ? <div className="container author-container">
        {
          muser.map(({id, Image, name, posts}, index)=>{
            return <Link to={`/posts/user/${id}`} key={index} className="author-avatar">
              <div>
                <img src={Image} alt="" />
              </div>
              <div className="author-info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
        </div> : <h2 className="error-center">N o User Found.</h2>}
      </div>
    </section>
  )
}
