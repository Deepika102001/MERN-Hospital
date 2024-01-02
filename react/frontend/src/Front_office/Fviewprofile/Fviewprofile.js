import React, { useState, useEffect } from "react";
import "./Fviewprofile.css"; // Import CSS file with styles
import Navigation from "../navigation";

const Fviewprofile = () => {
  const [officeExecutiveData, setOfficeExecutiveData] = useState(null);

  useEffect(() => {
    // Retrieve data from session storage
    const storedData = sessionStorage.getItem("registeredOfficeExecutive");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setOfficeExecutiveData(parsedData);
    }
  }, []);

  return (
    <>
      <Navigation />
      <div className="page">
        <div className="profile-container">
          <h2 className="profile-heading">Office Executive Profile</h2>
          {officeExecutiveData ? (
            <form className="profile-details">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={officeExecutiveData.name}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={officeExecutiveData.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  value={officeExecutiveData.age}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                <input
                  type="tel"
                  id="contact"
                  value={officeExecutiveData.contact}
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

export default Fviewprofile;
