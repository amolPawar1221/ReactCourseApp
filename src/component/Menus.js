import { ListGroup } from "reactstrap"
import {Link} from "react-router-dom"
function Menus() {
    return ( 
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" >
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" >
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses">
                View Courses
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!">
                Contact
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!">
                About
            </Link>
        </ListGroup>
     );
}

export default Menus;