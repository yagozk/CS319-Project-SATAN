import { Tab, Tabs } from "react-bootstrap";
import AdminStudents from "./AdminStudents";
import { useState, useEffect } from "react";
import AdminEvaluators from "./AdminEvaluators";
import useAuth from '../../hooks/useAuth';
import axios from "axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

async function fetchUserAdmin(axiosInstance, auth, setAdmin) {
    try {
        const response = await axiosInstance.get(`/admins/${auth.user}`);
        setAdmin(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchAllStudents(axiosInstance, setStudents) {
    try {
        const response = await axiosInstance.get(`/../students`);
        setStudents(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchAllEvaluators(axiosInstance, setEvaluator) {
    try {
        const response = await axiosInstance.all(`/../evaluators`);
        setEvaluator(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default function AdminManagement() {
const { auth } = useAuth();
    const [admin, setAdmin] = useState([]);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => { fetchUserAdmin(axiosPrivate, auth, setAdmin); }, []);
    console.log(admin);

    useEffect(() => {
        console.log(admin);
    }, [admin]);

  const [students, setStudents] = useState([]);
    useEffect(() => { fetchAllStudents(axiosPrivate, setStudents); }, []);

/*
  useEffect(() => {
    // Fetch student data from MongoDB collection
    axiosPrivate.get(`/../students`)
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error(`Error fetching student data:`, error);
      });
  }, []);*/

  const [evaluators, setEvaluators] = useState([]);
  useEffect(() => { fetchAllEvaluators(axiosPrivate, setEvaluators); }, []);

/*
    useEffect(() => {
    // Fetch student data from MongoDB collection
    axiosPrivate.get(`/../evaluators`)
      .then(response => {
        setEvaluators(response.data);
      })
      .catch(error => {
        console.error("Error fetching evaluator data:", error);
      });
  }, []);*/
    /*
    // Need an API call in this endpoint for list of all students and list of all evaluators.
    const [students] = useState([
        {id: 220000, evaluatorID: 1, course: "CS299", name: "Osman Osmanovic", last_submission_date: "2001-01-01", status: "Assigned to course", email: "temp@gmail.com"},
        {id: 220001, evaluatorID: 4, course: "CS299", name: "Feridun Feridunovski", last_submission_date: "2001-01-02", status: "Waiting TA", email: "temp@gmail.com"},
        {id: 220002, evaluatorID: -1, course: "CS399", name: "Bedük", last_submission_date: "2000-01-01", status: "Decision", email: "temp@gmail.com"},
        {id: 220003, evaluatorID: 3, course: "CS399", name: "Jonathan Jonathan", last_submission_date: "2002-03-02", status: "Waiting evaluator", email: "temp@gmail.com"},
        {id: 220005, evaluatorID: -1, course: "CS299", name: "Arda Yurdunuçokseven", last_submission_date: "1999-01-01", status: "Requested resubmission", email: "temp@gmail.com"},
        {id: 220006, evaluatorID: 2, course: "CS299", name: "Khvicha Kvaratskhelia", last_submission_date: "1999-05-01", status: "Serie A Champion", email: "temp@gmail.com"},
        {id: 220007, evaluatorID: -1, course: "CS399", name: "Mahmut Mahmut", last_submission_date: "1999-01-01", status: "Waiting evaluator", email: "temp@gmail.com"},
    ]);

    const [evaluators] = useState([
        {id: 1, name: "Eray Tüzün", email: "eray.tuzun@cs.bilkent.edu.tr", student_limit: 25, num_of_students: 12},
        {id: 2, name: "Halil Altay Güvenir", email: "altay.guvenir@cs.bilkent.edu.tr", student_limit: 30, num_of_students: 18},
        {id: 3, name: "Fazlı Can", email: "fazli.can@cs.bilkent.edu.tr", student_limit: 40, num_of_students: 16},
        {id: 4, name: "Selim Aksoy", email: "selim.aksoy@cs.bilkent.edu.tr", student_limit: 30, num_of_students: 27}
    ]);*/

    return (
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <Tabs defaultActiveKey="adminStudents" className="mb-3" fill>
                <Tab eventKey="adminStudents" title = "Students" tabClassName='coloredTab'>
                    <AdminStudents students = {students} userType = "admin" />
                </Tab>
                <Tab eventKey="adminEvaluators" title = "Evaluators" tabClassName='coloredTab'>
                    <AdminEvaluators evaluators = {evaluators} userType = "admin" />
                </Tab>
            </Tabs>
        </div>
    );
};
