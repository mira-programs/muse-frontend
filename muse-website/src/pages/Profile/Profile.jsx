import { Link } from 'react-router-dom';
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { useState } from 'react';
import './Profile.css';

export default function Profile() {
  const [profileImage, setProfileImage] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  return (
    <div className="profile">
      <header className="profile-header">
        {/* Background image is set via CSS */}
      </header>

      <div className="profile-container">
        <div className="profile-avatar">
          <img src="path-to-your-profile-image.jpg" alt="Profile" />
        </div>
        
        <div className="profile-info">
          <h1>John Doe</h1>
          <h2>Senior Financial Analyst at First National Bank</h2>
          <p>Toronto, Canada Area</p>
          
          <p className="section-title">Summary</p>
          <p>Experienced analyst specializing in financial analysis, modeling, and regulation with a can-do attitude and problem-solving skills. Worked for CFO, identified weaknesses in banks, and impacts of regulation on the industry.</p>
          
          {/* Repeat for other sections such as Experience, Education, Skills, etc. */}
        </div>
      </div>
    </div>
  );
}
