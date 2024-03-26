import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Make sure to import Link

const Register = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            // Send POST request to your backend
            const response = await axios.post('http://localhost:8080/register', formData);
            console.log('Server Response:', response.data);
            alert('Registration successful! Please check your email to verify your account.');
        } catch (error) {
            console.error('Registration error:', error.response.data);
            alert(`Error: ${error.response.data}`);
        }
    };

    return (
        <section className="register">
            <div className="wrapper">
                <div className="container register-container form-container">
                    <h2>Register</h2>
                    <form className="form register-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} required/>
                        <input type="text" placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} required />
                        <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />
                        <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} required/>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>

                    <small>Already have an account? <Link to="/login">Login</Link></small>
                </div>
            </div>
        </section>
    );
};

export default Register;