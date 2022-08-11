
import { Col, Container, Row } from "reactstrap";
import Header from "./component/Header";
import Home from "./component/Home";
import Menus from "./component/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AddNewCourse from "./component/AddNewCourse";
import AllCourses from "./component/AllCourses";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddNewCourse />}> </Route>
                <Route path="/view-courses" element={<AllCourses />}>  </Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>

  );
}

export default App;
