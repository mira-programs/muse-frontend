  import { useState } from "react"
  import { Link } from "react-router-dom"

  export default function Login() {

      const [userData, setUserData] = useState({
        email: "",
        password: "",
      });
    
      const changeInputHandle = (e) => {
        setUserData((prevState) => {
          return { ...prevState, [e.target.name]: e.target.value };
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("your-authentication-api-endpoint", {  // ADD ACTUAL ENDPOINT!!
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
    
          if (response.ok) {
            console.log("Login successful");
            history.pushState(`/profile/${userData.id}`);
          } else {
            console.error("Login failed");
          }
        } catch (error) {
          console.error("Error during login:", error);
        }
      };

    return (
      <section className="login">
        <div className="wrapper2">
            <div className="container login-container form-container">
            <h2>Login</h2>
            <form action="" className="form register-form">
              {/* <p className="form-message">This is the invalid message</p> */}
              <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandle} required />
              <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandle} required />
              <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <small>Don't have an account? <Link to={`/register`}>Register</Link></small>
          </div>
        </div>
      </section>
    )
  }
