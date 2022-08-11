import { Button, Card, CardBody, CardText, CardTitle, Container } from "reactstrap";
import axios from "axios"
import api from "../API/BaseAPI";

function Course({course, updateCourse}) {

    const deleteById = (id) => {
        axios.delete(`${api}/course/${id}`).then(
            (response) => {
                console.log(response)
                updateCourse(id);
            },
            (error) => {
                console.log(error);
            });
    };

    return (  
        <>
        <Card className="my-2">
            <CardBody className="text-center">
                <CardTitle>
                {course.title}
                </CardTitle>
                <CardText>
                {course.description}
                </CardText>
                <Container>
                    <Button color="danger" className="mx-2" onClick={ () => {
                         deleteById(course.courseId);
                    }}>Delete</Button>
                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
        </>
    );
}

export default Course;