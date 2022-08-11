import { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios"
import { toast } from "react-toastify";
import api from "../API/BaseAPI";

function AllCourses() {
    const [courses, setCourses] = useState("");

useEffect(() => {
    document.title = "View Courses || Learn With US"
},[]);

const getAllCouirses = () => {
    axios.get(`${api}/course`).then(
        (response) => {
            console.log(response);
            setCourses(response.data)
            toast.success("Data loaded");
        },
        (error) => {
            console.log(error);
            toast.error("server is down");
        }

    );
};

const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.courseId != id));
};

useEffect(()=> {
   getAllCouirses();
}, []);

    return ( 
        <>
        {
            courses.length > 0 ? courses.map( (course) => 
                <Course key={course.courseId} course={course} updateCourse={updateCourses}/>
                ) : <p>No coures to show please add the course</p>
        }
        </>
     );
}

export default AllCourses;