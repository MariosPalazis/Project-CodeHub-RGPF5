import React, { useEffect,useState } from "react";
import axios from 'axios';
import FormInstructor from "../Components/FormInstructor";



export const Instructors = (props) => {
    
    const [singleInstr, setInstr]=useState({});

    useEffect(() => {
        const fetch = async () => {
            const res = await axios(
              'http://localhost:3000/instructors/'+props.id,
            );
            console.log("inst");
            setInstr(res.data);
          };
       
          fetch();         
        
    },[props.id]);     
    console.log(singleInstr);


    return(
        <div>
            <div class="float-md-left" style={{width:"30%",paddingLeft:"15px"}}>
                <h5>{singleInstr.name && singleInstr.name.first} {singleInstr.name && singleInstr.name.last} ({singleInstr.dob})</h5>
                <p>Email: <a href={"mailto:"+singleInstr.email}>{singleInstr.email}</a> | <a href={singleInstr.linkedin} target="_blanc">LinkedIn</a></p>
                <label>{singleInstr.bio}</label>
            </div>
        </div>
    );
}


export default Instructors;
