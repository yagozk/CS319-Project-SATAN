import { Outlet, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export default function StudentSideBar() {
  return (
    <>
      <Row>
        <Col sm={3} md={2} className="StudentSideBar">
          <h1 className="student-sidebar-header">
            <Link to="/" className="student-sidebar-link">Bilport</Link>
          </h1>
          <ul className="student-sidebar-list">
            <li className="student-sidebar-item">
            <i className="material-icons">book</i>
              <Link to="/user" className="student-sidebar-link">Reports</Link>
            </li>
            <li className="student-sidebar-item">
              <i className="material-icons">account_circle</i>
              <Link to="/user/profile" className="student-sidebar-link">Profile</Link>
            </li>
            <li className="student-sidebar-item">
              <i className="material-icons">group</i>
              <Link to="/user/evaluator_ta_info" className="student-sidebar-link">Evaluator/TA Info</Link>
            </li>
            <li className="student-sidebar-item">
              <i className="material-icons">assignment_ind</i>
              <Link to="/user/supervisor_info" className="student-sidebar-link">Supervisor Info</Link>
            </li>
          </ul>
        </Col>
      </Row>

      <Outlet />
    </>
  );
}