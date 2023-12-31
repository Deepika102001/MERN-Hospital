import react ,{useState,useEffect}from "react"
import './DoctorLogin.css'
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'
import {Routes,Route,Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'


export const DoctorLogin=()=>{
    const [email,changeemail]=useState("")
    const [password,changepassword]=useState("")
    const [role,changerole]=useState("")
    const [setError,changeError]=useState(null)
    const navigate = useNavigate("")
    const [userdetails,ChangeUsrdetails]=useState({email:"",
                                                   password:"",
                                                   role :""})
    const [onRecaptchaChange,changeonRecaptchaChange]=useState(false)
    // const [erifyCap,changeerifyCap]=useState(false)
    
    useEffect(()=>{
        console.log(role,".........");
    },[onRecaptchaChange,userdetails,email,password,role])
    
    const checkMail=(data)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(data);
    return isValid
    }

    // console.log(checkMail("doctor@gmail.com"),"checking mail");


    const call =()=>{
        console.log("call");
        const data={
            email: email,
            password:password,
            role:"Doctor"
        }
         console.log(data.role===userdetails.role);
         console.log(userdetails.role,"rr",data.role,"ttt");
         console.log(data.role,"<",userdetails.role,"<");
         console.log(userdetails.email,"rr",data.email,"ttt");
         console.log(data.password,"pppp",userdetails.password,"kkk");
        if (data.role===userdetails.role) {
            console.log(userdetails.role,"rr",data.role,"ttt");
            if (data.email===userdetails.email) {
                console.log(userdetails.email,"rr",data.email,"ttt");
                console.log(data.password,"pppp",userdetails.password,"kkk");
                if (data.password===userdetails.password) {

                    navigate("/Doctorhome")
                //  console.log("login successfully");
                }else{
                    changeError("INVALID PASSWORD") 
            setTimeout(hideSpam, 1000);
                }
            
            }else{
                changeError("INVALID EMAIL") 
            setTimeout(hideSpam, 1000);
            }
    
            
        }else{
            if (data.role!="Doctor") {
                changeError("INVALID ROLE") 
                setTimeout(hideSpam, 1000);
            }
        }
    }


    const login=async()=>{


        console.log("login");

        const data={
            email: email,
            password:password,
            role:"Doctor"
        }

        if (onRecaptchaChange) {
            console.log(checkMail(email));
            if (checkMail(email)) {
                
                if (password.length>=5) {
                 
                  await  axios.post("http://localhost:1111/officialEmail/",data).then(response => {
                        console.log(response.data);
                        changerole(response.data.role)
                     ChangeUsrdetails({email:response.data.email,
                        password:response.data.password,
                        role :response.data.role})
                        call()
                        
                      })
                      .catch(error => {
                        changeError("INVALID USER") 
                    setTimeout(hideSpam, 1000);
                        console.error('Error:', error);
                      });
                }else{
                    // console.log("WRONG PASSWORD");
                    changeError("5 CHARACTER NEED PASSWORD") 
                    setTimeout(hideSpam, 1000);
              
                }
            
            }else{
                // console.log();
                changeError("ENTER PROPER EMAIL") 
                setTimeout(hideSpam, 1000);
          
            }
    
            
        }else{
            changeError("VERIFY CAPTCHA") 
      setTimeout(hideSpam, 1000);


        }


      
    }

    const hideSpam = () => {
        // setShowSpam(false);
        changeError(null) 

      };
    
      // Set a timeout to hide the spam message after 5 seconds
    
    
    return <>
        <div  className="lcontainer4">
     
        <div className="login1">
        <h1>LOGIN</h1>

            <p>Email</p>
            <input type="email"
            value={email}
            onChange={e=>changeemail(e.target.value)}
            placeholder="Enter value"
            ></input>

            <p >Password</p>
            <input type="Password"
            value={password}
            onChange={e=>changepassword(e.target.value)}
            placeholder="Enter Password"
            ></input>
            <br></br><br></br>
            <Link to="/DoctorForgotPassword">
            <p className="fpass">forgot password ?</p>
            </Link>
            <ReCAPTCHA className="ReCAPTCHA" sitekey="6Lf7eyQpAAAAABP44pO0L6bvtrOV5FnLLk1kGIrR" onChange={()=>changeonRecaptchaChange(true)} />
               
               <br></br>
            <div className="div1">
               
               <button onClick={login}>Login</button>
        
               <br></br><br></br>
               <p>
               Don't have an account?{' '}
               <Link to="/DoctorRegister" style={{ textDecoration: 'underline' }}> 
               Register
             </Link>
             </p>
                
            </div>
        {setError?<p className="error">{setError}</p>:null}


        </div>

    </div>
    </>
   
}







