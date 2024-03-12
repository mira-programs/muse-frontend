import { useState } from "react"
import { Link } from "react-router-dom"

export default function Register() {

  const [userData, setUserData]= useState({
    firstName: '',
    lastName:'',
    email: '',
    password: '',
    password2: '',
  })

  const changeInputHandle =(e)=>{
    setUserData(prevState =>{
      return{...prevState, [e.target.name] : e.target.value}
    })
  }

  const handleClick=(e)=>{
    e.preventDefault()
    console.log(muser);
  }

  const muser = { name: userData.name, email: userData.email, password: userData.password, password2: userData.password2 };
  console.log(muser);
  

  return (
    <section className="register">
      <div className="container register-container form-container">
        <h2>Register</h2>
        <form action="" className="form register-form">
          {/* <p className="form-message">This is the invalid message</p> */}
          <input type="text" placeholder='First Name' name=' firstName' value={userData.firstName} onChange={changeInputHandle} />
          <input type="text" placeholder='Last Name' name='lastName' value={userData.lastName} onChange={changeInputHandle} />
          <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandle} />
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandle} />
          <input type="password" placeholder='Confirm password' name='password2' value={userData.password2} onChange={changeInputHandle} />
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Register</button>
        </form>

        <small>Already have an account? <Link to={`/login`}>Login</Link></small>
      </div>
    </section>
    )
}
