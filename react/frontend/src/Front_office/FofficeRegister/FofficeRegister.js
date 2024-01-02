import React, { useState, useEffect } from "react";
import './FofficeRegister.css';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import {  useNavigate } from "react-router-dom";

export const FofficeRegister = () => {
    const [email, changeEmail] = useState("");
    const [name, changeName] = useState("");
    const [password, changePassword] = useState("");
    const [age, changeAge] = useState("");
    const [contact, changeContact] = useState("");
    const [err, changeErr] = useState("");
    const [isRecaptchaVerified, changeRecaptchaVerification] = useState(false);
    const navigate = useNavigate("");

    useEffect(() => {
        console.log(email, "email");
        console.log(password, "password");
        console.log(name, "name");
        console.log(age, "age");
        console.log(contact, "contact");
    }, [email, password, name, age, contact]);

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
            role: "officeExecutive"
        };

        if (isRecaptchaVerified) {
            if (name && age && contact) {
                if (checkMail(email)) {
                    if (password.length >= 5) {
                        // Store data in session storage
                        sessionStorage.setItem('registeredOfficeExecutive', JSON.stringify(data));

                        try {
                            const response = await axios.post("http://localhost:1111/newofficial", data);
                            console.log(response.data);
                            navigate("/FofficeLogin");
                        } catch (error) {
                            if (error.response && error.response.status === 400) {
                                // Office executive with the same email already exists
                                changeErr("Office executive with this email already exists");
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
                changeErr("Enter all required fields");
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
        <div className="lcontainer6">
            <div className="register-form">
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

                <ReCAPTCHA
                    className="ReCAPTCHA"
                    sitekey="6Lf7eyQpAAAAABP44pO0L6bvtrOV5FnLLk1kGIrR"
                    onChange={() => changeRecaptchaVerification(true)}
                /><br/><br/>

                <div className="div1">
                    <button className="save" onClick={save}>Register</button>
                </div>

                {err ? <p className="error">{err}</p> : null}
            </div>
        </div>
    );
<<<<<<< HEAD
};
=======
};
>>>>>>> b618acbd078bad86f806dd05bac7c2b0543918a0
