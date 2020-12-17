import React, {useEffect, useState} from "react";
import {Button,Modal,Form} from "react-bootstrap";
import AddNewInstructors from "../Components/AddNewInstructors";
import axios from 'axios';


export const AddNew = () => {
    const [validatedA, setValidatedA] = useState(false);
    const [instr, setInstr] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'http://localhost:3000/instructors',
          );
      
          setInstr(result.data);
        };
        fetchData();
    }, []);

    const [data,setData]=useState({
        "id": "",
        "title": "",
        "imagePath": "",
        "price": {
          "normal": 0,
          "early_bird": 0
        },
        "dates": {
          "start_date": "",
          "end_date": ""
        },
        "duration": "",
        "open": false,
        "instructors": [],
        "description": ""
      });



    const handleSubmitAdd = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          console.log("wrong");
        }
        else{
            event.preventDefault();
            console.log(data);

        }
    
        setValidatedA(true);
      };
    const updateData=(event)=>{
        setData({...data, [event.target.name]:event.target.value});
    };


    return(
        <div style={{padding:"30px", margin:"10px", backgroundColor:"Gainsboro"}}>
            <h2 style={{marginLeft:"10px"}}>Add Course</h2>
            <hr/>
            <Form noValidate validated={validatedA} onSubmit={handleSubmitAdd}>
                    <Form.Group >
                        <Form.Label>Title:</Form.Label>
                        <Form.Control required as="input" defaultValue={data.title} name="title" onChange={updateData}/>
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Duration</Form.Label>
                        <Form.Control required type="text" defaultValue={data.duration} name="duration" onChange={updateData}/>
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Image Path:</Form.Label>
                        <Form.Control required type="text" defaultValue={data.imagePath} name="imagePath" onChange={updateData}/>
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check  type="checkbox" label="Bookable" name="open" checked={data.open} onChange={(e)=>{setData({...data, [e.target.name]:e.target.checked})}}/>
                        <Form.Control.Feedback type="invalid">
                            Please pick a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <h3><Form.Label>Instructors</Form.Label></h3>
                        {instr?.map((inst)=>(
                            <AddNewInstructors id={inst.id}/>
                        ))}
                        <Form.Control.Feedback type="invalid">
                            Please pick a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Description:</Form.Label>
                        <Form.Control required as="textarea" rows="4" cols="20" defaultValue={data.description}  name="description" onChange={updateData}/>
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label><h3>Dates:</h3></Form.Label><br/>
                        <Form.Label>Start Date:</Form.Label>
                        <Form.Control required type="text" defaultValue={data.dates && data.dates.start_date} name="dates.start_date" onChange={e=>setData({...data,dates:{...data.dates,start_date:e.target.value}})}/>
                        <Form.Label>End Date:</Form.Label>
                        <Form.Control required type="text" defaultValue={data.dates && data.dates.end_date} name="dates.end_date" onChange={e=>setData({...data,dates:{...data.dates,end_date:e.target.value}})}/>
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label><h3>Price:</h3></Form.Label><br/>
                        <Form.Label>Normal price:</Form.Label>
                        <Form.Control required type="text" defaultValue={data.price && data.price.normal} name="price.normal" onChange={e=>setData({...data,price:{...data.price,normal:e.target.value}})}/>
                        <Form.Label>Early bid:</Form.Label>
                        <Form.Control required type="text" defaultValue={data.price && data.price.early_bird} name="price.early_bird" onChange={e=>setData({...data,price:{...data.price,early_bird:e.target.value}})}/>
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <hr/>
                    <Button variant="primary" type="submit" style={{marginLeft:"85%"}}>
                        Add Course
                    </Button>
                </Form>
        </div>
    );
}
export default AddNew;