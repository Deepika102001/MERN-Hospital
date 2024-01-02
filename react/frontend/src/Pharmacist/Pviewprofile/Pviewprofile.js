import React, { useState, useEffect } from "react";
import "./Pviewprofile.css"; 
import Navigation from "../navigation";

const PharmacistProfile = () => {
  const [pharmacistData, setPharmacistData] = useState(null);

  useEffect(() => {
    // Retrieve data from session storage
    const storedData = sessionStorage.getItem("registeredPharmacist");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setPharmacistData(parsedData);
    }
  }, []);

  return (
    <>
      <Navigation />
      <div className="page">
        <div className="profile-container">
          <h2 className="profile-heading">Pharmacist Profile</h2>
          {pharmacistData ? (
            <form className="profile-details">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={pharmacistData.name}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={pharmacistData.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  value={pharmacistData.age}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                <input
                  type="tel"
                  id="contact"
                  value={pharmacistData.contact}
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

export default PharmacistProfile;
