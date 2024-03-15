import { useState } from "react"
import { useEffect } from 'react';
import { Link } from "react-router-dom"

export default function Register() {

  const [userData, setUserData]= useState({
    firstName: '',
    lastName:'',
    email: '',
    password: '',
  })

  const changeInputHandle =(e)=>{
    setUserData(prevState =>{
      return{...prevState, [e.target.name] : e.target.value}
    })
  }

  const handleClick=(e)=>{
    // e.preventDefault()
    console.log(muser);
    history.pushState(`/`);

    useEffect(()=>{
      fetch('http://localhost:8080')
      .then(response=>response.json())
      .then(result=>console.log(result))
    },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://example.com/register", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Registration successful!");
        history.push(`/`);
      } else {
        console.error("Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };


  const muser = { firstName: userData.firstName, lastName: userData.lastName, email: userData.email, password: userData.password };
  console.log(muser);
}

  return (
    <section className="register">
      <div className="wrapper wrapper-signup">
        <div className="container register-container form-container">
          <h2 className="header">Register</h2>
          <form action="" className="form register-form">
            {/* <p className="form-message">This is the invalid message</p> */}
            <input type="text" placeholder='First Name' name='firstName' value={userData.firstName} onChange={changeInputHandle} required/>
            <input type="text" placeholder='Last Name' name='lastName' value={userData.lastName} onChange={changeInputHandle} required />
            <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandle} required />
            <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandle} required/>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Register</button>
          </form>

          <small>Already have an account? <Link to={`/login`}>Login</Link></small>
        </div>
      </div>
    </section>
    )
}
