import React, { useState, useEffect } from "react";

const PharmacistProfile = () => {
    const [pharmacistData, setPharmacistData] = useState(null);

    useEffect(() => {
        // Retrieve data from session storage
        const storedData = sessionStorage.getItem('registeredPharmacist');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setPharmacistData(parsedData);
        }
    }, []);

    return (
        <div>
            <h1>Pharmacist Profile</h1>
            {pharmacistData ? (
                <div>
                    <p><strong>Name:</strong> {pharmacistData.name}</p>
                    <p><strong>Email:</strong> {pharmacistData.email}</p>
                    <p><strong>Age:</strong> {pharmacistData.age}</p>
                    <p><strong>Contact:</strong> {pharmacistData.contact}</p>
                    {/* Other data fields */}
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default PharmacistProfile;
