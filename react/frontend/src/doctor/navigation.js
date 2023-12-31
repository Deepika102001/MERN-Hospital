// import React from "react";
// import { Link } from "react-router-dom";

// export const Navigation = () => {
//   const navContainerStyle = {
//     backgroundImage: "url('https://example.com/your-image.jpg')", // Replace with your image URL
//     backgroundSize: "cover",
//     backgroundColor: "#14213d", // Blue background color
//     color: "#fff",
//     padding: "15px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   };

//   const h1Style = {
//     margin: "20px",
//     fontSize: "34px",
//   };

//   const navigationStyle = {
//     display: "flex",
//     gap: "60px", // Add a gap of 20px between navigation links
//     textDecoration: "none", // Remove text decoration for links
//     justifyContent: "center",
//     marginRight: "10%",
//     color: "#fff",
//   };

//   const logoutLinkStyle = {
//     textDecoration: "none",
//     color: "#fff",
//   };
//   return (
//     <div style={navContainerStyle}>
//       <h1 style={h1Style}>DOCTOR</h1>
//       <div style={navigationStyle}>
//         <Link to="/Doctorhome" style={{ textDecoration: "none", color: "#fff" }}>
//           HOME
//         </Link>
//         <Link to="/DoctorChat" style={{ textDecoration: "none", color: "#fff" }}>
//           CHAT
//         </Link>
//         <Link to="/DocterMedicene" style={{ textDecoration: "none", color: "#fff" }}>
//           MEDICINE
//         </Link>

//       </div>
//       <Link to="/" style={{ textDecoration: "none", color: "red" }}>
//           LOGOUT
//         </Link>
//     </div>
//   );
// };

// export default Navigation;







import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const navContainerStyle = {
    backgroundImage: "url('https://example.com/your-image.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundColor: "#14213d", // Blue background color
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const h1Style = {
    margin: "10px",
    fontSize: "34px",
  };

  const navigationStyle = {
    display: "flex",
    gap: "60px", // Add a gap of 20px between navigation links
    textDecoration: "none", // Remove text decoration for links
    justifyContent: "center",
    marginRight: "5%",
    color: "#fff",
  };

  return (
    <div style={navContainerStyle}>
      <h1 style={h1Style}>DOCTOR</h1>
      <div style={navigationStyle}>
        <Link to="/Doctorhome" style={{ textDecoration: "none", color: "#fff" }}>
          HOME
        </Link>
        <Link to="/DoctorChat" style={{ textDecoration: "none", color: "#fff" }}>
          CHAT
        </Link>
        <Link to="/DocterMedicene" style={{ textDecoration: "none", color: "#fff" }}>
          MEDICINE
        </Link>

        <Link to="/DoctorProfile" style={{ textDecoration: "none", color: "#fff" }}>
        EDIT PROFILE
        </Link>
      
        {/* <Link to="/ViewProfile" style={{ textDecoration: "none", color: "#fff" }}>
         PROFILE
        </Link> */}

      </div>
      <Link to="/" style={{ textDecoration: "none", color: "red" }}>
          LOGOUT
        </Link>
    </div>
  );
};

export default Navigation;
