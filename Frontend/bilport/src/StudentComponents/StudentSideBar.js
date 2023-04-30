import { Outlet, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export default function StudentSideBar(){
    return(
    <>
        <Row>
          <Col sm={3} md={2} className="Sidebar">
            <h1 class = "sidebar-header">Bilport</h1>
            <ul class = "sidebar-list">
              <li class ="sidebar-item">
              <i class="material-icons">book</i>
                <Link to="/" class = "sidebar-link">Reports</Link>
              </li>
              <li class ="sidebar-item">
              <i class="material-icons">account_circle</i>
                <Link to="/profile" class = "sidebar-link">Profile</Link>
              </li>
              <li class ="sidebar-item">
              <i class="material-icons">group</i>
                <Link to="/evaluator_ta_info" class = "sidebar-link">Evaluator/TA Info</Link>
              </li>
              <li class ="sidebar-item">
              <i class="material-icons">assignment_ind</i>
                <Link to="/supervisor_info" class = "sidebar-link">Supervisor Info</Link>
              </li>
            </ul>
          </Col>
        </Row>

    <Outlet/>
    </>
    );
}