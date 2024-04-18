import { useState } from 'react';
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { PiUserCircleDuotone } from "react-icons/pi";
import './Profile.css';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    profilePicture: <PiUserCircleDuotone />,
    firstName: '',
    lastName: '',
    location: '',
    about: '',
    isOpenToCollaborate: false,
    experiences: []
  });

  const [editedProfileData, setEditedProfileData] = useState({ 
    ...profileData,
    experiences: profileData.experiences.map(experience => ({ ...experience })) // Ensure experiences is an array
  });

  const [newExperience, setNewExperience] = useState({ position: '', company: '', duration: '' });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedProfileData({ ...profileData });
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    setProfileData({ ...editedProfileData });
  };

  const handleChange = (e) => {
    setEditedProfileData({ ...editedProfileData, [e.target.name]: e.target.value });
  };

  const handleChangeExperience = (e, index, field) => {
    const newExperiences = [...editedProfileData.experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: e.target.value };
    setEditedProfileData({ ...editedProfileData, experiences: newExperiences });
  };

  const handleAddExperience = () => {
    setEditedProfileData({
      ...editedProfileData,
      experiences: [...editedProfileData.experiences, newExperience],
      newExperience: { position: '', company: '', duration: '' },
    });
  };

  const handleChangeNewExperience = (e) => {
    setNewExperience({ ...newExperience, [e.target.name]: e.target.value });
  };

  const toggleIsOpenToCollaborate = () => {
    setEditedProfileData({ ...editedProfileData, isOpenToCollaborate: !editedProfileData.isOpenToCollaborate });
  };

  return (
    <div className="profile">
      <header className="profile-header">
        {isEditing ? (
          <div className="edit-profile-actions">
            <button className="btn-save" onClick={handleSaveEdit}><FaCheckCircle /> Save</button>
            <button className="btn-cancel" onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <button className="btn-edit" onClick={handleEditClick}><FaEdit /> Edit Profile</button>
        )}
      </header>
      <div className="profile-container">
        <div className="profile-avatar">
          {profileData.profilePicture}
        </div>
        <div className="profile-info">
          <h1>
            {isEditing ? (
              <input type="text" name="firstName" value={editedProfileData.firstName} onChange={handleChange} />
            ) : (
              editedProfileData.firstName
            )} {isEditing ? (
              <input type="text" name="lastName" value={editedProfileData.lastName} onChange={handleChange} />
            ) : (
              editedProfileData.lastName
            )}
          </h1>
          <h2>
            {isEditing ? (
              <input type="text" name="location" value={editedProfileData.location} onChange={handleChange} />
            ) : (
              editedProfileData.location
            )}
          </h2>
          <p className="section-title">Experiences</p>
          {isEditing ? (
            editedProfileData.experiences.map((experience, index) => (
              <div key={index}>
                <label>Position:</label>
                <input
                  type="text"
                  name={`position-${index}`}
                  value={experience.position}
                  onChange={(e) => handleChangeExperience(e, index, 'position')}
                />
                <label>Company:</label>
                <input
                  type="text"
                  name={`company-${index}`}
                  value={experience.company}
                  onChange={(e) => handleChangeExperience(e, index, 'company')}
                />
                <label>Duration:</label>
                <input
                  type="text"
                  name={`duration-${index}`}
                  value={experience.duration}
                  onChange={(e) => handleChangeExperience(e, index, 'duration')}
                />
                {isEditing && (
                  <div className="new-experience-form">
                    <div className="add-experience-button">
                      {isEditing && (
                        <button onClick={handleAddExperience}>
                          Add Experience
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      name="position"
                      value={newExperience.position}
                      onChange={handleChangeNewExperience}
                      placeholder="Position"
                    />
                    <label htmlFor="position">Position</label>
                    <input
                      type="text"
                      name="company"
                      value={newExperience.company}
                      onChange={handleChangeNewExperience}
                      placeholder="Company"
                    />
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      name="duration"
                      value={newExperience.duration}
                      onChange={handleChangeNewExperience}
                      placeholder="Duration"
                    />
                    <label htmlFor="duration">Duration</label>
                  </div>
                )}
              </div>
            ))
          ) : (
            editedProfileData.experiences && editedProfileData.experiences.map((experience, index) => (
              <div key={index}>
                <p>{experience.position} at {experience.company} ({experience.duration})</p>
              </div>
            ))
          )}
          <p className="section-title">Summary</p>
          {isEditing ? (
            <textarea name="about" value={editedProfileData.about} onChange={handleChange} />
          ) : (
            <p>{editedProfileData.about}</p>
          )}
          <div className="collaboration-toggle">
            <label>
              <input type="checkbox" checked={editedProfileData.isOpenToCollaborate} onChange={toggleIsOpenToCollaborate} />
              Open to collaborate
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
