import React from "react";

export const Profile = () => {
  // Retrieve user data from session storage
  const userData = JSON.parse(sessionStorage.getItem('registeredUserData'));

  // Rendering user data
  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <p>Name: {userData?.name}</p>
        <p>Email: {userData?.email}</p>
        <p>Age: {userData?.age}</p>
        <p>Contact: {userData?.contact}</p>
        <p>Gender: {userData?.gender}</p>
      </div>
    </div>
  );
};

export default Profile;
