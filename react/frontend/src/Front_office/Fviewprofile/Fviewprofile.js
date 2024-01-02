import React, { useState, useEffect } from "react";

const Fviewprofile = () => {
    const [officeExecutiveData, setOfficeExecutiveData] = useState(null);

    useEffect(() => {
        // Retrieve data from session storage
        const storedData = sessionStorage.getItem('registeredOfficeExecutive');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setOfficeExecutiveData(parsedData);
        }
    }, []);

    return (
        <div>
            <h1>Office Executive Profile</h1>
            {officeExecutiveData ? (
                <div>
                    <p><strong>Name:</strong> {officeExecutiveData.name}</p>
                    <p><strong>Email:</strong> {officeExecutiveData.email}</p>
                    <p><strong>Age:</strong> {officeExecutiveData.age}</p>
                    <p><strong>Contact:</strong> {officeExecutiveData.contact}</p>
                    {/* Other data fields */}
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};
export default Fviewprofile