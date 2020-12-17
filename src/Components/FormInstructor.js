import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import axios from 'axios';


const FormInstructor = (props) => {
    const [allInstr, setAll]=useState([]);
    const [allC, setC]=useState({});
    const [teach,setTeach]=useState([]);
    const [loaded,setLoad]=useState(false);

    useEffect(() => {
      const fetchA = async () => {
          const resu = await axios(
            'http://localhost:3000/instructors',
          );
          setAll(resu.data);
        };
     
        fetchA();

        const fetchB = async () => {
          const res = await axios(
            'http://localhost:3000/courses/'+props.id,
          );
          setC(res.data);
        };  
        fetchB(); 
        setLoad(true);
    },[]);
    console.log(allC,"course");
    console.log(allInstr,"teacher");

    return(
      <>
          {allInstr?.map((item)=>(
              <Form.Check  type="checkbox" name={item.id} checked={true} label={item.name && item.name.first+" "+item.name.last} name="bookable"/>
          ))}
      </>
    );

}
export default FormInstructor;