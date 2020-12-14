import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './singlecourse.css';
import Instructors from "./Instructors";
import Buttons from "./Buttons";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';



export const SingleCourse = () => {
    let {id}=useParams();
    const [singleC, setCdata] = useState({});
    const [loader, setLoad] = useState(true);

    

    



    useEffect(() => {   
        const fetchD = async () => {
            const result = await axios(
              'http://localhost:3000/courses/'+id,
            );
            console.log("res")
            setCdata(result.data);
            setLoad(false)
          };
       
          fetchD();

    },[id]);
    console.log(singleC);
    return(
        <div>
            <Loader type="BallTriangle" visible={loader} color="#00BFFF" height={400} width={400} />
            <h1 style={{margin:"10px"}}>{singleC.title} ({singleC.id})</h1><br/>
            <img width="100%" height="350vh" src={"https://raw.githubusercontent.com/codehub-learn/PF-ReGen-React/master/project/public"+singleC.imagePath} alt="Card image cap"/>
            <br/>
            <p style={{padding:"20px", paddingLeft:"25px",paddingRight:"25px"}}>{singleC.description}</p>
            <Buttons data={singleC}/> 
            <br/>
            <h4 style={{marginLeft:"1vw"}}>Instructors</h4>
            {singleC.instructors?.map((ins)=>(
                <Instructors id={ins}/>
            ))}
            <br/>
            <br/>
            
            
        </div>
    );
}

export default SingleCourse;