import React ,{ useState, useEffect }from "react";
import Navigation from "../navigation";
import "./Profile.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const PharmaProfile = () => {
  

    
  const [CurrentEmail, changeCurrentEmail] = useState("");
  const [Newemail, changeNewemail] = useState("");
  const [Name, changeName] = useState("");
  const [CurrentPassword, changeCurrentPassword] = useState("");
  const [NewPassword, changeNewPassword] = useState("");
//   

  const [setError, changeError] = useState(null);
  const navigate = useNavigate("");
  const [userdetails, ChangeUsrdetails] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [onRecaptchaChange, changeonRecaptchaChange] = useState(false);
  // const [erifyCap,changeerifyCap]=useState(false)

  useEffect(() => {
    console.log(CurrentEmail,"CE", Newemail,"NE", Name,"N", CurrentPassword,"CP",NewPassword,"NP");
    console.log(userdetails,"lll");
  }, [CurrentEmail, Newemail, Name, CurrentPassword,NewPassword,userdetails]);

  const checkMail = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(data);
    return isValid;
  };

  // console.log(checkMail("doctor@gmail.com"),"checking mail");

  const call = () => {
    console.log("call");
    const data = {
        cemail:CurrentEmail,
      email: Newemail,
      name:Name,
      password: NewPassword,
      role: "Pharmacist",
    };
    
      if (CurrentEmail === userdetails.email) {
        if (CurrentPassword === userdetails.password) {
            if (checkMail(Newemail)) {
                if (NewPassword.length>=5) {
                   console.log("login successfully");
                    axios.put("http://localhost:1111/updateofficial/", data)
            .then((response) => {
              console.log(response.data);
              ChangeUsrdetails(response.data);
              navigate("/Pharmacisthome");
              
            })
            .catch((error) => {
              changeError("INVALID USER");
              setTimeout(hideSpam, 1000);
              console.error("Error:", error);
            });
                } else {
                  changeError("INVALID new PASSWORD");
                  setTimeout(hideSpam, 1000);
                }
              } else {
                changeError("INVALID new EMAIL");
                setTimeout(hideSpam, 1000);
              }
        } else {
          changeError("INVALID PASSWORD");
          setTimeout(hideSpam, 1000);
        }
      } else {
        changeError("INVALID current EMAIL");
        setTimeout(hideSpam, 1000);
      }
   
  };


  const login = async () => {
    console.log("login");

    const data = {
      email: CurrentEmail
    };

 
      if (checkMail(CurrentEmail)) {
        if (CurrentPassword.length >= 5) {
          await axios.post("http://localhost:1111/officialEmail/", data)
            .then((response) => {
              console.log(response.data);
              ChangeUsrdetails(response.data);
              call();
            })
            .catch((error) => {
              changeError("INVALID USER");
              setTimeout(hideSpam, 1000);
              console.error("Error:", error);
            });
        } else {
          // console.log("WRONG PASSWORD");
          changeError("5 CHARACTER NEED PASSWORD");
          setTimeout(hideSpam, 1000);
        }
      } else {
        // console.log();
        changeError("ENTER PROPER EMAIL");
        setTimeout(hideSpam, 1000);
      }
   
  };

  const hideSpam = () => {
    // setShowSpam(false);
    changeError(null);
  };

  // Set a timeout to hide the spam message after 5 seconds


  return (<>
  <Navigation/>
    <div className="qwe">
        <p>current email id</p>
        <input className="Ii1"
         type="email"
         value={CurrentEmail}
         onChange={(e) => changeCurrentEmail(e.target.value)}
         placeholder="Enter value"/>


        <p>Name</p>
        <input className="Ii1"
         type="email"
         value={Name}
         onChange={(e) => changeName(e.target.value)}
         placeholder="Enter value"/>

        <p>new email id</p>
        <input className="Ii1"
         type="email"
         value={Newemail}
         onChange={(e) => changeNewemail(e.target.value)}
         placeholder="Enter value"/>

        <p>Current password </p>
        <input className="Ii1"
         type="password"
         value={CurrentPassword}
         onChange={(e) => changeCurrentPassword(e.target.value)}
         placeholder="Enter value"/>

        <p>New password </p>
        <input className="Ii1"
         type="password"
         value={NewPassword}
         onChange={(e) => changeNewPassword(e.target.value)}
         placeholder="Enter value"/>

        <button onClick={login}>Save</button>
        {setError ? <p className="error">{setError}</p> : null}

        {/* <h3>Email id</h3>
        <p>qwe@gmail.com</p>
        <h3>Name</h3>
        <p>sdfgh</p>
        <button>edit</button> */}
       
    </div>
  </>
  );
};

// export default Profile;