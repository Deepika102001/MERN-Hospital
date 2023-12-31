import React, { useState, useEffect } from "react";
import './DoctorRegister.css';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export const DoctorRegister = () => {
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

    const checkEmail = (emailAddress) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailAddress);
    };

    const save = async () => {
        const data = {
            email: email,
            name: name,
            password: password,
            age: age,
            contact: contact,
            role: "Doctor"
        };

        if (isRecaptchaVerified) {
            if (name && age && contact) {
                if (checkEmail(email)) {
                    if (password.length >= 5) {
                        try {
                            const response = await axios.post("http://localhost:1111/newofficial", data);
                            console.log(response.data);
                            navigate("/Doctorlogin");
                        } catch (error) {
                            console.error('Error:', error);
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
        <div className="lcontainer4">
            <div className="register1">
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
                    <button className="save" onClick={save}>Save the details</button>
                </div>

                {err ? <p className="error">{err}</p> : null}
            </div>
        </div>
    );
};