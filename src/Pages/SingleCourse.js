import axios from 'axios';
import React, { useEffect, useState } from "react";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useParams } from "react-router-dom";
import Buttons from "./Buttons";
import Instructors from "./Instructors";
import './singlecourse.css';
import {Button,Modal,Form} from "react-bootstrap";
import FormInstructor from "../Components/FormInstructor";
import {Redirect} from 'react-router-dom';

function createMarkup(text) {
    return {__html: text};
  }


export const SingleCourse = () => {
    let {id}=useParams();
    const [singleC, setCdata] = useState({});
    const [data,setData]=useState({});
    const [instructors,setInstruct]=useState([]);
    const [loader, setLoad] = useState(true);

    const [edit, setEdit] = useState(false);
    const [del, setDel] = useState(false);
    const [validatedE, setValidatedE] = useState(false);
    const [redi, setRE] = useState(true);

    const openEdit=()=>setEdit(true);
    const closeEdit=()=>setEdit(false);
    const openDel=()=>setDel(true);
    const closeDel=()=>setDel(false);


    useEffect(() => {   
        const fetchD = async () => {
            const result = await axios(
              'http://localhost:3000/courses/'+id,
            );
            setCdata(result.data);
            setData(result.data);
            setLoad(false);
          };
       
          fetchD();

          const fetchI = async () => {
            const res = await axios(
              'http://localhost:3000/instructors/',
            );
            setInstruct(res.data);
          };
          fetchI();

    },[id]);

    const handleSubmitEdit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          console.log("wrong");
        }
        else{
            event.preventDefault();
            console.log(data,"to send");
            const editData = async () => {
                let cb=await axios.put('http://localhost:3000/courses/'+id,data);
                console.log(cb);
                setRE(false);
    
              };
              editData();
        }
    
        setValidatedE(true);
      };
        const deleteCourse=()=>{
            const delData = async () => {
                let cb=await axios.delete('http://localhost:3000/courses/'+ id);
                console.log(cb);
                setRE(false);

            };
            delData();
        };

        const updateData=(event)=>{
            setData({...data, [event.target.name]:event.target.value});
        };
        const updateInstuctors=(event)=>{
            let temp=data.instructors;
            if(isInst(event.target.name)){
                let index=temp.indexOf(event.target.name);
                if (index > -1) {
                    temp.splice(index, 1);
                }
                setData({...data, instructors:temp});
            }
            else{
                temp.push(event.target.name);
                setData({...data, instructors:temp});
            }
        };
        if(!redi){
            return <Redirect to="/Courses" />;
        }

        /*edwww */
        const isInst=(id)=>{
            return data.instructors.includes(id);
        };

    console.log(singleC);
    return(
        <div>
            <Loader type="BallTriangle" visible={loader} color="#00BFFF" height={400} width={400} />
            <h1 style={{margin:"10px"}}>{singleC.title} ({singleC.id})</h1><br/>
            <img width="100%" height="350vh" src={"https://raw.githubusercontent.com/codehub-learn/PF-ReGen-React/master/project/public"+singleC.imagePath} alt="Card image cap"/>
            <div className="inf1"><label>Price: {singleC.price && singleC.price.normal}€</label><br/><label>Bookable: <img src={singleC.open? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3OZt24Czl2n2z-mg4eGK6pc6hx56jTBpFg&usqp=CAU": "data:image/jpeg;base64,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"}
 alt="info" width="27" height="27" /></label></div>
            <div className="inf2">
                <label>Duration: {singleC.duration}</label><br/>
                <label>Dates: {singleC.dates && singleC.dates.start_date} - {singleC.dates && singleC.dates.end_date}</label>
            </div>
            <br/>
            <br/>
            <div dangerouslySetInnerHTML={createMarkup(singleC.description)} style={{marginLeft:"1vw"}}/>
            
            <button class="btn btn-primary"  style={{marginLeft:"1vw"}} onClick={openEdit}>Edit</button> 
            <button class="btn btn-danger"  style={{marginLeft:"1vw"}} onClick={openDel}>Delete</button>
            <br/>
            <h4 style={{marginLeft:"1vw"}}>Instructors</h4>
            {singleC.instructors?.map((instt)=>(
                <Instructors id={instt}/>
            ))}
            <br/>
            <br/>
            <div>
            <Modal show={edit} onHide={closeEdit} size="lg" backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Edit {singleC.title}</Modal.Title>
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
                        {instructors.map((ins)=>(
                            <Form.Check  type="checkbox" name={ins.id} checked={isInst(ins.id)} label={ins.name && ins.name.first+" "+ins.name.last} onChange={updateInstuctors}/>
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
        </div>
    );
}

export default SingleCourse;