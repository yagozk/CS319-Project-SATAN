import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import SuperAdminStudents from "./SuperAdminStudents";
import SuperAdminEvaluators from "./SuperAdminEvaluators";
import SuperAdminTA from "./SuperAdminTA";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

async function fetchAllStudents(axiosInstance, setStudents) {
    try {
        const response = await axiosInstance.get(`/admins/submissions`);
        setStudents(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchAllEvaluators(axiosInstance, setEvaluator) {
    try {
        const response = await axiosInstance.get(`/evaluators`);
        setEvaluator(response.data);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}    

async function fetchUserSuperAdmin(axiosInstance, auth, setSuperadmin) {
    try {
        const response = await axiosInstance.get(`/superadmins/${auth.user}`);
        setSuperadmin(response.data);
    } catch (error) {
        console.error(error);
    }
}


export default function SuperAdminManagement(){
    
    const { auth } = useAuth();
    // This is not working for some reason
    const [superAdmin, setSuperadmin] = useState([]);
    const axiosPrivate = useAxiosPrivate();


    const [evaluators, setEvaluators] = useState([]);

    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetchUserSuperAdmin(axiosPrivate, auth, setSuperadmin);
        fetchAllStudents(axiosPrivate, setStudents);
        fetchAllEvaluators(axiosPrivate, setEvaluators);
    }, []);

    useEffect(() => {
        console.log(superAdmin);
    }, [superAdmin]);




    // Need an API call in this endpoint for list of all students and list of all evaluators.
    /*const [students,setStudents] = useState([
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
            <Tabs defaultActiveKey="superAdminStudents" className="mb-3" fill>
                <Tab eventKey="superAdminStudents" title = "Students" tabClassName='coloredTab'>
                    <SuperAdminStudents students = {students} />
                </Tab>
                <Tab eventKey="superAdminEvaluators" title = "Evaluators" tabClassName='coloredTab'>
                    <SuperAdminEvaluators evaluators = {evaluators} /> 
                </Tab>
                <Tab eventKey="superAdminTA" title = "Teaching Assistant" tabClassName='coloredTab'>
                    <SuperAdminTA/>
                </Tab>    
            </Tabs>
        </div>
    );
};