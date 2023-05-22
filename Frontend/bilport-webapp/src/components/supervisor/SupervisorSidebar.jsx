import { Outlet, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export default function SupervisorSidebar(){
    return(
    <>
        <Row>
          <Col sm={3} md={2} className="Sidebar">
            <h1 class = "sidebar-header"><i class="fa-solid fa-shield-cat" style={{color: "#bf69ed"}}></i> Bilport</h1>
            <hr/>
            <ul class = "sidebar-list">
              <li class ="sidebar-item">
              <i class="material-icons">assignment_turned_in</i>
                <Link to="/supervisor" class = "sidebar-link">Evaluation Form</Link>
              </li>
              <li class ="sidebar-item">
              <i class="fa-solid fa-pen-nib fa-lg"></i>
                <Link to="/supervisor/seal_stamp" class = "sidebar-link">Seal/Stamp</Link>
              </li>
              <li class ="sidebar-item">
              <i class="fa-solid fa-circle-user fa-lg"></i>
                <Link to="/supervisor/profile" class = "sidebar-link">Profile</Link>
              </li>
            </ul>
          </Col>
        </Row>

    <Outlet/>
    </>
    );
}