import React, { useState,useEffect } from "react";
import axios from 'axios';
import {Form} from "react-bootstrap";



const AddNewInstructors = (props) => {
    const [inst, setInst]=useState({});

    useEffect(() => {
        const fetchA = async () => {
            const resu = await axios(
              'http://localhost:3000/instructors/'+props.id,
            );
            setInst(resu.data);
          };
       
          fetchA();
          console.log(inst);
      },[]);


    return(
        <Form.Check  type="checkbox" name="instructors" value={props.id} checked={false} label={inst.name && inst.name.first+" "+inst.name.last} /> 
    );
}
export default AddNewInstructors;
