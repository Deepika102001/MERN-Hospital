import React from "react";
import "./Uviewprofile.css";
import { Navigation } from "../navigation";
export const Profile = () => {
  // Retrieve user data from session storage
  const userData = JSON.parse(sessionStorage.getItem('registeredUserData'));

  // Rendering user data
  return (
    <>
      <Navigation />
      <div className="page">
        <div className="profile-container">
          <h2 className="profile-heading">User Profile</h2>
          {userData ? (
            <form className="profile-details">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={userData.name}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={userData.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  value={userData.age}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                <input
                  type="tel"
                  id="contact"
                  value={userData.contact}
                  readOnly
                />
              </div>
              {/* Other data fields */}
            </form>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
