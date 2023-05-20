import { Outlet, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export default function StudentSideBar() {
  return (
    <>
      <Row>
        <Col sm={3} md={2} className="Sidebar">
          <h1 className="sidebar-header">
            <Link to="/" className="sidebar-link"><i class="fa-solid fa-shield-cat" style={{color: "#bf69ed"}}></i> Bilport</Link>
          </h1>
          <ul className="sidebar-list">
            <li className="sidebar-item">
            <i className="material-icons">book</i>
              <Link to="/user" className="sidebar-link">Reports</Link>
            </li>
            <li className="sidebar-item">
              <i className="material-icons">account_circle</i>
              <Link to="/user/profile" className="sidebar-link">Profile</Link>
            </li>
            <li className="sidebar-item">
              <i class="fa-solid fa-person-chalkboard"></i>
              <Link to="/user/evaluator_ta_info" className="sidebar-link">Evaluator/TA Info</Link>
            </li>
            <li className="sidebar-item">
              <i className="material-icons">assignment_ind</i>
              <Link to="/user/supervisor_info" className="sidebar-link">Supervisor Info</Link>
            </li>
          </ul>
        </Col>
      </Row>

      <Outlet />
    </>
  );
}