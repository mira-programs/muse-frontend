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
    // e.preventDefault()
    console.log(muser);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://example.com/register", {  //ADD BACKEND ENDPOINT HERE!!
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Registration successful!");
        history.pushState(`/`);
      } else {
        console.error("Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const muser = { firstName: userData.firstName, lastName: userData.lastName, email: userData.email, password: userData.password, password2: userData.password2 };
  console.log(muser);
  

  return (
    <section className="register">
      <div className="wrapper1">
        <div className="container register-container form-container">
          <h2>Register</h2>
          <form action="" className="form register-form">
            {/* <p className="form-message">This is the invalid message</p> */}
            <input type="text" placeholder='First Name' name='firstName' value={userData.firstName} onChange={changeInputHandle} required/>
            <input type="text" placeholder='Last Name' name='lastName' value={userData.lastName} onChange={changeInputHandle} required />
            <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandle} required />
            <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandle} required/>
            <input type="password" placeholder='Confirm password' name='password2' value={userData.password2} onChange={changeInputHandle} required/>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Register</button>
          </form>

          <small>Already have an account? <Link to={`/login`}>Login</Link></small>
        </div>
      </div>
    </section>
    )
}
