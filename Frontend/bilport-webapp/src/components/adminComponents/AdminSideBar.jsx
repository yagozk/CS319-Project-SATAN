import { Outlet, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export default function AdminSideBar(){
    return(
    <>
        <Row>
          <Col sm={3} md={2} className="Sidebar">
            <h1 class = "sidebar-header"><i class="fa-solid fa-shield-cat" style={{color: "#bf69ed"}}></i> Bilport</h1>
            <hr/>
            <ul class = "sidebar-list">
              <li class ="sidebar-item">
              <i class="material-icons">insert_chart</i>
                <Link to="/admin" class = "sidebar-link">Management</Link>
              </li>
              <li class ="sidebar-item">
              <i class="material-icons">account_circle</i>
                <Link to="/admin/profile" class = "sidebar-link">Profile</Link>
              </li>
              <li class ="sidebar-item">
              <i class="material-icons">gavel</i>
                <Link to="/admin" class = "sidebar-link">Evaluator Mode</Link>
              </li>
            </ul>
          </Col>
        </Row>

    <Outlet/>
    </>
    );
}