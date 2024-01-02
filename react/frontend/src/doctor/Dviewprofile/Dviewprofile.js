
import React, { useState, useEffect } from "react";

const DoctorProfile = () => {
    const [doctorData, setDoctorData] = useState(null);

    useEffect(() => {
        // Retrieve data from session storage
        const storedData = sessionStorage.getItem('registeredDoctor');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setDoctorData(parsedData);
        }
    }, []);

    return (
        <div>
            <h1>Doctor Profile</h1>
            {doctorData ? (
                <div>
                    <p><strong>Name:</strong> {doctorData.name}</p>
                    <p><strong>Email:</strong> {doctorData.email}</p>
                    <p><strong>Age:</strong> {doctorData.age}</p>
                    <p><strong>Contact:</strong> {doctorData.contact}</p>
                    {/* Other data fields */}
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default DoctorProfile;
