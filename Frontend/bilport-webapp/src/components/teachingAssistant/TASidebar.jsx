import { Outlet, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export default function TASidebar(){
    return(
    <>
        <Row>
          <Col sm={3} md={2} className="Sidebar">
            <h1 class = "sidebar-header"><i class="fa-solid fa-shield-cat" style={{color: "#bf69ed"}}></i> Bilport</h1>
            <hr/>
            <ul class = "sidebar-list">
              <li class ="sidebar-item">
              <i class="fa-solid fa-user-graduate fa-lg"></i>
                <Link to="/ta" class = "sidebar-link">Students</Link>
              </li>
              <li class ="sidebar-item">
              <i class="fa-solid fa-pen-nib fa-lg"></i>
                <Link to="/ta/profile" class = "sidebar-link">Profile</Link>
              </li>
            </ul>
          </Col>
        </Row>

    <Outlet/>
    </>
    );
}