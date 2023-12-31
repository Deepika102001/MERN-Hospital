// import React, { useEffect, useState } from 'react';
// import Navigation from '../navigation';

// const ViewProfile = () => {
//   const [registrationDetails, setRegistrationDetails] = useState(null);

//   useEffect(() => {
//     // Retrieve registration details from sessionStorage
//     const storedDetails = sessionStorage.getItem('registrationDetails');

//     if (storedDetails) {
//       const parsedDetails = JSON.parse(storedDetails);
//       setRegistrationDetails(parsedDetails);
//     }
//   }, []);

//   return (
//     <div>
//         <Navigation/>
//       <h2>View Profile</h2>
//       {registrationDetails ? (
//         <div>
//           <p><strong>Name:</strong> {registrationDetails.name}</p>
//           <p><strong>Email:</strong> {registrationDetails.email}</p>
//           {/* Add more details as needed */}
//         </div>
//       ) : (
//         <p>No registration details found.</p>
//       )}
//     </div>
//   );
// };

// export default ViewProfile;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Update import
// import axios from 'axios';
// import Navigation from '../navigation';

// const ViewProfile = () => {
//   const [registrationDetails, setRegistrationDetails] = useState(null);
//   const navigate = useNavigate(); // Update hook

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Make a request to your MongoDB backend API to fetch user details
//         const response = await axios.get('/api/getUserProfile'); // Replace with your API endpoint

//         // Assuming the response contains user details in the following format
//         const userData = response.data;

//         setRegistrationDetails(userData);
//       } catch (error) {
//         console.error('Error fetching user details', error);
//         // Handle error, e.g., redirect to an error page
//       }
//     };

//     fetchData();
//   }, []);

//   const handleNavigate = () => {
//     // Replace '/otherPage' with the path of the page you want to navigate to
//     navigate('/Doctor'); // Update navigation
//   };

//   return (
//     <div>
//       <Navigation />
//       <h2>View Profile</h2>
//       {registrationDetails ? (
//         <div>
//           <p>
//             <strong>Name:</strong> {registrationDetails.name}
//           </p>
//           <p>
//             <strong>Email:</strong> {registrationDetails.email}
//           </p>
//           {/* Add more details as needed */}
//           <button onClick={handleNavigate}>Go to Another Page</button>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ViewProfile;




// import React, { useEffect, useState } from 'react';
// import Navigation from '../navigation';

// const ViewProfile = () => {
//   const [registrationDetails, setRegistrationDetails] = useState(null);

//   useEffect(() => {
//     // Retrieve user details from sessionStorage
//     const storedDetails = sessionStorage.getItem('userDetails');

//     if (storedDetails) {
//       const parsedDetails = JSON.parse(storedDetails);
//       setRegistrationDetails(parsedDetails);
//     }
//   }, []);

//   return (
//     <div>
//       <Navigation />
//       <h2>View Profile</h2>
//       {registrationDetails ? (
//         <div>
//           <p><strong>Name:</strong> {registrationDetails.name}</p>
//           <p><strong>Email:</strong> {registrationDetails.email}</p>
//           {/* Add more details as needed */}
//         </div>
//       ) : (
//         <p>No registration details found.</p>
//       )}
//     </div>
//   );
// };

// export default ViewProfile;





import React, { useEffect, useState } from 'react';
import Navigation from '../navigation';
import { Link } from "react-router-dom";

const ViewProfile = () => {
  const [registrationDetails, setRegistrationDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Retrieve user registration details from sessionStorage
    const storedRegistrationDetails = sessionStorage.getItem('registrationDetails');
    if (storedRegistrationDetails) {
      const parsedRegistrationDetails = JSON.parse(storedRegistrationDetails);
      setRegistrationDetails(parsedRegistrationDetails);
    }

    // Retrieve user login details from sessionStorage
    const storedUserDetails = sessionStorage.getItem('userDetails');
    if (storedUserDetails) {
      const parsedUserDetails = JSON.parse(storedUserDetails);
      setUserDetails(parsedUserDetails);
    }
  }, []);

  return (
    <><div>
          <Navigation />
          <h2></h2>
          {registrationDetails && userDetails ? (
              <div>
                  <center>
                      <p><strong>Name:</strong> {registrationDetails.name}</p>
                      <p><strong>Email:</strong> {userDetails.email}</p>
                      {/* Add more details as needed */}
                  </center>
              </div>

          ) : (
              <p>No registration details found.</p>
          )}
      </div><Link to="/DoctorProfile" style={{ textDecoration: "none" }}>
              <button
                  
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                  Book
              </button>
          </Link></>
  );
};

export default ViewProfile;
