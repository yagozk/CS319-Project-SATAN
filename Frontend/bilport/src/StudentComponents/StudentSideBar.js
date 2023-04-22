import { Outlet, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export default function StudentSideBar(){
    return(
    <>
        <Row>
          <Col sm={3} md={2} className="StudentSideBar">
            <h1 class = "student-sidebar-header">Bilport</h1>
            <ul class = "student-sidebar-list">
              <li class ="student-sidebar-item">
              <i class="material-icons">book</i>
                <Link to="/" class = "student-sidebar-link">Reports</Link>
              </li>
              <li class ="student-sidebar-item">
              <i class="material-icons">account_circle</i>
                <Link to="/profile" class = "student-sidebar-link">Profile</Link>
              </li>
              <li class ="student-sidebar-item">
              <i class="material-icons">group</i>
                <Link to="/evaluator_ta_info" class = "student-sidebar-link">Evaluator/TA Info</Link>
              </li>
              <li class ="student-sidebar-item">
              <i class="material-icons">assignment_ind</i>
                <Link to="/supervisor_info" class = "student-sidebar-link">Supervisor Info</Link>
              </li>
            </ul>
          </Col>
        </Row>

    <Outlet/>
    </>
    );
}