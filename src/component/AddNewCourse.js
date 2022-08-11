import { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from 'axios';
import { toast } from "react-toastify";
import api from "../API/BaseAPI";

function AddNewCourse() {

    useEffect(() => {
        document.title = "Add Course || Learn With US"
    }, []);

    const [course, setCourse] = useState({});

    const addCourse = () => {
        console.log(course);
        postDataToServer(course);
    };

    const postDataToServer = (data) => {
        axios.post(`${api}/course`, data).than(
            (response) => {
                console.log(response);
                toast.success("success");
            },
            (error) => {
                console.log(error);
                toast.error("error");
            });
    };

    return (  
        <>
        <Container className="text-center">
        <h1>Add New Course</h1>
        </Container>
        
        <Form onSubmit={addCourse}>
            <FormGroup>
                <Input type="text" id="courseId" placeholder="enter course id" onChange={
                    (event) => {
                        setCourse({...course, id: event.target.value});
                    }
                }   />
            </FormGroup>
            <FormGroup>
                <Input type="text" id="title" placeholder="enter course name" onChange={
                    (event) => {
                        setCourse({...course, title: event.target.value});
                    }
                }/>
            </FormGroup>
            <FormGroup>
                <Input type="textarea" id="description" placeholder="enter course details" onChange={
                    (event) => {
                        setCourse({...course, description: event.target.value});
                    }
                }/>
            </FormGroup>
            <Container>
                <Button type = "submit" color="primary" className="mx-2">
                    Add Course
                </Button>
                <Button type = "reset" color="warning">
                    Clear
                </Button>
            </Container>
        </Form>
        </>
    );
}

export default AddNewCourse;