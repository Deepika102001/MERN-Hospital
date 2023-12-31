import React,{useEffect, useState} from "react";
import './ForPass.css'
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'


export const FofficeForgotPassword=()=>{
    const [email,changeemail]=useState("")
    const [password,changepassword]=useState("")
    const [err,changeerr]=useState("")
    const navigate=useNavigate("")



    useEffect(()=>{},[email,password])

    const checkMail=(data)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(data);
        return isValid
        }

    const hideSpam = () => {
        changeerr(null) 

      };
    
    const save=async()=>{
        const data={
            email:email,
            password:password
        }

        if (checkMail(email)) {
            if (password.length>=5) {
                await   axios.put("http://localhost:1111/updatePassword",data).then(response => {
                           console.log(response.data);
                           navigate("/FofficeLogin")
                            
                          })
                          .catch(error => {
                            
                            console.error('Error:', error);
                          });
                // navigate("/Doctorlogin")
            } else {
                changeerr("enter password atleast 5 character") 
                    setTimeout(hideSpam, 1000);
            }
        } else {
            changeerr("enter proper email") 
            setTimeout(hideSpam, 1000);
        }
    }
    return(
        <div className="Fcontainer16">
            <div className="Fpass">
                <h2>FORGOT-PASSWORD</h2>
                <p>Email</p>
                <input type="email"
            value={email}
            onChange={e=>changeemail(e.target.value)}
            placeholder="Enter value"
                /><br></br><br></br>
                <p>New Password</p>
                <input
                type="Password"
                value={password}
                onChange={e=>changepassword(e.target.value)}
                placeholder="Enter Password"
                /><br></br><br></br>
                {/* <Link to="/Doctorlogin"> */}
                <button onClick={save}>save the details</button>
                {/* </Link> */}
        {err?<p className="error">{err}</p>:null}

                 </div>
                 
        </div>
    )
}