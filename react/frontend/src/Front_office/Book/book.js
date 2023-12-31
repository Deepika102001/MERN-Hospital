import react ,{useState,useEffect}from "react"
import './book.css'
import { Navigation } from "../navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const  Book = ()=>{
    const [name,changename]=useState("")
    const [Doctor,changeDoctor]=useState("")
    const [Dis,changeDis]=useState("")
    const [err,changeerr]=useState("")
    const navigate=useNavigate("")



    useEffect(()=>{},[name,Doctor,Dis])

    const save=async()=>{
        console.log("sav");
        console.log(name);
      if (name) {
        if (Doctor) {
            if (Dis) {
                let id;
             
           const length=await axios.get("http://localhost:1111/appoinment").then(response => {
   console.log("im in");
                        id=response.data.length;
                        //  console.log(response.data);
                       })
                       .catch(error => {
                         console.error('Error:', error);
                       });
                       const data={
                        appointmentId:id+1,
                        doctorName:Doctor,
                        patientName:name,
                        status:false,
                        description:Dis
                                     }

             await   axios.post("http://localhost:1111/newAppoinment",data).then(response => {
                console.log(response.data);
                navigate("/Apporve")
                 
               })
               .catch(error => {
                 
                 console.error('Error:', error);
               });
            } else {
            //   console.log("err");
              changeerr("enter Dis") 
              setTimeout(hideSpam, 1000);
            }
        } else {
        //   console.log("err");
          changeerr("enter Doctor name") 
          setTimeout(hideSpam, 1000);
        }
      } else {
        // console.log("err");
        changeerr("enter proper name") 
        setTimeout(hideSpam, 1000);
      }
    }
    const hideSpam = () => {
        changeerr(null) 

      };
return <>
   <Navigation/>
 <div  className="bcontainer">

<div className="login">
<h1>BOOK</h1>

    <p>name</p>
    <input type="text" value={name} onChange={e=>changename(e.target.value)} placeholder="Enter Name"/>
    <p >doctorName</p>
    <input type="text" value={Doctor} onChange={e=>changeDoctor(e.target.value)} placeholder="Enter Name"></input>
    <p>description</p>
    <input type="text" value={Dis} onChange={e=>changeDis(e.target.value)}  className="description"></input>
    
        <button onClick={save} >Register</button>
        {err?<p className="eror">{err}</p>:null}

        
</div>

</div>
</>
}