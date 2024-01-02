import React, { useState, useEffect } from "react";
import './Userregister.css';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export const UserRegister = () => {
    const [email, changeEmail] = useState("");
    const [name, changeName] = useState("");
    const [password, changePassword] = useState("");
    const [age, changeAge] = useState("");
    const [contact, changeContact] = useState("");
    const [gender, changeGender] = useState(""); // New state for gender
    const [err, changeErr] = useState("");
    const [isRecaptchaVerified, changeRecaptchaVerification] = useState(false);
    const navigate = useNavigate("");

    useEffect(() => {
        console.log(email, "email");
        console.log(password, "password");
        console.log(name, "name");
        console.log(age, "age");
        console.log(contact, "contact");
        console.log(gender, "gender"); // Logging gender
    }, [email, password, name, age, contact, gender]); // Including gender in the dependency array

    const checkMail = (d) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(d);
    };

    const save = async () => {
        const data = {
          email: email,
          name: name,
          password: password,
          age: age,
          contact: contact,
          gender: gender,
          Role: "User"
        };
      
        if (isRecaptchaVerified) {
          if (name && age && contact && gender) {
            if (checkMail(email)) {
              if (password.length >= 5) {
                try {
                  const response = await axios.post("http://localhost:1111/createuser", data);
                  console.log(response.data);
                  navigate("/UserLogin");
                } catch (error) {
                  if (error.response && error.response.status === 400) {
                    // User with the same email already exists
                    changeErr("User with this email already exists");
                  } else {
                    console.error('Error:', error);
                    changeErr("Internal Server Error");
                  }
                  setTimeout(hideError, 1000);
                }
              } else {
                changeErr("Enter a password of at least 5 characters");
                setTimeout(hideError, 1000);
              }
            } else {
              changeErr("Enter a valid email");
              setTimeout(hideError, 1000);
            }
          } else {
            changeErr("Enter all required fields including gender");
            setTimeout(hideError, 1000);
          }
        } else {
          changeErr("Verify the CAPTCHA");
          setTimeout(hideError, 1000);
        }
      };
    const hideError = () => {
        changeErr("");
    };

    return (
        <div className="lcontainer3">
            <div className="register-form4">
                <h1>REGISTER</h1>

                <p>Name</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => changeName(e.target.value)}
                    placeholder="Enter name"
                /><br/><br/>

                <p>Email</p>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => changeEmail(e.target.value)}
                    placeholder="Enter email"
                /><br/><br/>

                <p>Password</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => changePassword(e.target.value)}
                    placeholder="Enter password"
                /><br/><br/>

                <p>Age</p>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => changeAge(e.target.value)}
                    placeholder="Enter age"
                /><br/><br/>

                <p>Contact</p>
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => changeContact(e.target.value)}
                    placeholder="Enter contact number"
                /><br/><br/>

                <p>Gender</p>
                <select
                    value={gender}
                    onChange={(e) => changeGender(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <br/>

                <ReCAPTCHA
                    className="ReCAPTCHA"
                    sitekey="6Lf7eyQpAAAAABP44pO0L6bvtrOV5FnLLk1kGIrR"
                    onChange={() => changeRecaptchaVerification(true)}
                /><br/>

                <div className="div1">
                    <button className="save" onClick={save}>Register</button>
                </div>

                {err ? <p className="error">{err}</p> : null}
            </div>
        </div>
    );
};
