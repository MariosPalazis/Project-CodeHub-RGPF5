import React, {useEffect, useState} from "react";
import {Button,Modal,Form} from "react-bootstrap";

export const Buttons = (props) => {  
    const [edit, setEdit] = useState(false);
    const [del, setDel] = useState(false);
    const [validatedE, setValidatedE] = useState(false);


    const openEdit=()=>setEdit(true);
    const closeEdit=()=>setEdit(false);
    const openDel=()=>setDel(true);
    const closeDel=()=>setDel(false);

    const handleSubmitEdit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          console.log("wrong");
        }
        else{
            console.log("corr");
            event.preventDefault();

        }
    
        setValidatedE(true);
      };
    const deleteCourse=()=>{

    };


    return(
        <div>
            <button class="btn btn-primary"  style={{marginLeft:"1vw"}} onClick={openEdit}>Edit</button> 
            <button class="btn btn-danger"  style={{marginLeft:"1vw"}} onClick={openDel}>Delete</button>
            <Modal show={edit} onHide={closeEdit} size="lg" backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Edit-{props.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form noValidate validated={validatedE} onSubmit={handleSubmitEdit}>
                    <Form.Group >
                        <Form.Label>Title:</Form.Label>
                        <Form.Control required as="input" defaultValue={props.data.title} name="title" />
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Duration</Form.Label>
                        <Form.Control required type="text" defaultValue={props.data.duration} name="duration" />
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Image Path:</Form.Label>
                        <Form.Control required type="text" defaultValue={props.data.imagePath} name="imagePath"/>
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check  type="checkbox" label="Bookable" name="bookable" />
                        <Form.Control.Feedback type="invalid">
                            Please pick a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <h3><Form.Label>Instructors</Form.Label></h3>
                        {props.data.instructors?.map((inst)=>(
                            <Form.Check  type="checkbox" label={inst} name="bookable"/>
                        ))}
                        <Form.Control.Feedback type="invalid">
                            Please pick a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Description:</Form.Label>
                        <Form.Control required as="textarea" rows="4" cols="20" defaultValue={props.data.description}  name="description"/>
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label><h3>Dates:</h3></Form.Label><br/>
                        <Form.Label>Start Date:</Form.Label>
                        <Form.Control required type="text" defaultValue="dt" name="start_date" />
                        <Form.Label>End Date:</Form.Label>
                        <Form.Control required type="text" defaultValue="dt" name="end_date" />
                        <Form.Control.Feedback type="invalid">
                            Please put a value.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label><h3>Price:</h3></Form.Label><br/>
                        <Form.Label>Normal price:</Form.Label>
                        <Form.Control required type="text" defaultValue="price" name="normal" />
                        <Form.Label>Early bid:</Form.Label>
                        <Form.Control required type="text" defaultValue="pricebid" name="earlybid" />
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
                    <p>Are you sure you want to delete {props.data.title} Course</p>
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