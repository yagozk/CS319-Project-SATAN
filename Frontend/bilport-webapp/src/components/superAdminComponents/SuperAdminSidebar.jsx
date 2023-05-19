import { Outlet, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export default function AdminSideBar(){
    return(
    <>
        <Row>
          <Col sm={3} md={2} className="Sidebar">
            <h1 class = "sidebar-header">Bilport</h1>
            <ul class = "sidebar-list">
              <li class ="sidebar-item">
              <i class="material-icons">insert_chart</i>
                <Link to="/superadmin" class = "sidebar-link">Management</Link>
              </li>
              <li class ="sidebar-item">
              <i class="material-icons">account_circle</i>
                <Link to="/superadmin/profile" class = "sidebar-link">Profile</Link>
              </li>
            </ul>
          </Col>
        </Row>

    <Outlet/>
    </>
    );
}