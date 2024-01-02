import React, { useState, useEffect } from "react";
import "./Dviewprofile.css"; 
import Navigation from "../navigation";

const DoctorProfile = () => {
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    // Retrieve data from session storage
    const storedData = sessionStorage.getItem("registeredDoctor");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setDoctorData(parsedData);
    }
  }, []);

  return (
    <>
      <Navigation />
      <div className="page">
        <div className="profile-container">
          <h2 className="profile-heading">Doctor Profile</h2>
          {doctorData ? (
            <form className="profile-details">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={doctorData.name}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={doctorData.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  value={doctorData.age}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                <input
                  type="tel"
                  id="contact"
                  value={doctorData.contact}
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

export default DoctorProfile;
