import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentSideBar from './StudentComponents/StudentSideBar';
import Reports from './StudentComponents/Reports';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/index.css';
import './Style/studentSidebarStyle.css';
import StudentProfile from './StudentComponents/StudentProfile';
import EvaluatorTAInfo from './StudentComponents/EvaluatorTAInfo';
import SupervisorInfo from './StudentComponents/SupervisorInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App(){
  return (
  <BrowserRouter>
      <Routes>
          <Route path = "/" element={<StudentSideBar/>}>
              <Route index element={<Reports/>} />
              <Route path = "profile" element = {<StudentProfile/>} />
              <Route path = "evaluator_ta_info" element = {<EvaluatorTAInfo/>} />
              <Route path = "supervisor_info" element = {<SupervisorInfo/>} />
          </Route>
      </Routes>
  </BrowserRouter>
  );
}
root.render(
  <App/>
);