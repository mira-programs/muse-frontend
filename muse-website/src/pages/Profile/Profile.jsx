import { Link } from 'react-router-dom';
import ProfileImage from '../../assets/bobross.jpeg';
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { useState } from 'react';

export default function Profile() {
  const [profileImage, setProfileImage] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  return (
    <section className="profile">
      <div className="container profile-container">
      <Link to={`/myposts/id`}>My Posts</Link>
        <div className="profile-details">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={ProfileImage} alt="" />
            </div>
            <form className="profile-image-form">
              <input type="file" name='profile-image' id='profile-image' accept='png, jpg, jpeg' onChange={e => setProfileImage(e.target.files[0])} />
            </form>
            <button className="profile-image-button">
              <FaCheckCircle />
            </button>
          </div>

          <div className="profile-info">
            <h2>{name}</h2>
            <p>{bio}</p>

            <div className="section">
              <h3>Experience</h3>
              <p>{experience}</p>
            </div>

            <div className="section">
              <h3>Education</h3>
              <p>{education}</p>
            </div>

            <div className="section">
              <h3>Skills</h3>
              <p>{skills}</p>
            </div>

            <div className="section">
              <h3>Contact Information</h3>
              <p>{contactInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
