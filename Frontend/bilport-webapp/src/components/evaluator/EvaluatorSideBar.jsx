import { Outlet, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export default function EvaluatorSideBar(){
    return(
    <>
        <Row>
          <Col sm={3} md={2} className="Sidebar">
            <h1 class = "sidebar-header"><i class="fa-solid fa-shield-cat" style={{color: "#bf69ed"}}></i> Bilport</h1>
            <ul class = "sidebar-list">
              <li class ="sidebar-item">
              <i class="fa-solid fa-user-graduate fa-lg"></i>
                <Link to="/evaluator" class = "sidebar-link">Assigned Students</Link>
              </li>
              <li class ="sidebar-item">
              <i class="material-icons">account_circle</i>
                <Link to="/evaluator/profile" class = "sidebar-link">Profile</Link>
              </li>
              <li class ="sidebar-item">
              <i class="material-icons">contact_mail</i>
                <Link to="/evaluator/course_ta_info" class = "sidebar-link">Course TA Info</Link>
              </li>
            </ul>
          </Col>
        </Row>

    <Outlet/>
    </>
    );
}