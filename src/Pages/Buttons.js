import React, { useState} from "react";
import {Button,Modal,Form} from "react-bootstrap";
import FormInstructor from "../Components/FormInstructor";
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export const Buttons = (props) => {  
    const [edit, setEdit] = useState(false);
    const [del, setDel] = useState(false);
    const [validatedE, setValidatedE] = useState(false);
    const [redi, setRE] = useState(true);

    const openEdit=()=>setEdit(true);
    const closeEdit=()=>setEdit(false);
    const openDel=()=>setDel(true);
    const closeDel=()=>setDel(false);
    const [data,setData]=useState({});
    

    const handleSubmitEdit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          console.log("wrong");
        }
        else{
            console.log(data,"data");
            event.preventDefault();
            /*const editData = async () => {
                let cb=await axios.put('http://localhost:3000/courses/'+props.data.id,data);
                console.log(cb);
                setRE(false);
    
              };
              editData();*/
        }
    
        setValidatedE(true);
      };
    const deleteCourse=()=>{
        const delData = async () => {
            let cb=await axios.delete('http://localhost:3000/courses/'+ props.id);
            console.log(cb);
            setRE(false);

          };
          delData();
    };

    const updateData=(event)=>{
        setData({...data, [event.target.name]:event.target.value});
    };
    if(!redi){
        return <Redirect to="/Courses" />;
    }

    return(
        <div>
            <button class="btn btn-primary"  style={{marginLeft:"1vw"}} onClick={openEdit}>Edit</button> 
            <button class="btn btn-danger"  style={{marginLeft:"1vw"}} onClick={openDel}>Delete</button>
            <Modal show={edit} onHide={closeEdit} size="lg" backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Edit {data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form noValidate validated={validatedE} onSubmit={handleSubmitEdit}>
                    <Form.Group >
                        <Form.Label>Title:</Form.Label>
                        <Form.Control required as="input" defaultValue={data.title} name="title" onChange={updateData} />
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
                        <Form.Check  type="checkbox" label="Bookable" checked={data.open} name="open" onChange={(e)=>{setData({...data, [e.target.name]:e.target.checked})}}/>
                        <Form.Control.Feedback type="invalid">
                            Please pick a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <h3><Form.Label>Instructors</Form.Label></h3>
                            <FormInstructor id={data.id}/>
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
                        <Form.Control required type="text" defaultValue={data.dates && data.dates.start_date} name="start_date" onChange={e=>setData({...data,dates:{...data.dates,start_date:e.target.value}})}/>
                        <Form.Label>End Date:</Form.Label>
                        <Form.Control required type="text" defaultValue={data.dates && data.dates.end_date} name="end_date" onChange={e=>setData({...data,dates:{...data.dates,end_date:e.target.value}})}/>
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label><h3>Price:</h3></Form.Label><br/>
                        <Form.Label>Normal price:</Form.Label>
                        <Form.Control required type="text" defaultValue={data.price && data.price.normal} name="normal" onChange={e=>setData({...data,price:{...data.price,normal:parseInt(e.target.value)}})}/>
                        <Form.Label>Early bid:</Form.Label>
                        <Form.Control required type="text" defaultValue={data.price && data.price.early_bird} name="earlybid" onChange={e=>setData({...data,price:{...data.price,early_bird:parseInt(e.target.value)}})}/>
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                
                    <Modal.Footer>
                    <Button variant="secondary" onClick={closeEdit}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Form>
                </Modal.Body>
            </Modal>


            <Modal show={del} onHide={closeDel} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Delete Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete {data.title} Course</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={closeDel}>
                    Close
                </Button>
                <Button variant="danger" onClick={deleteCourse}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Buttons;