import { useState, useEffect } from "react";
import StudentsPage from "../commonComponents/StudentsPage";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from '../../hooks/useAuth';

async function fetchSubmissions(axiosPrivate, auth, setSubmissions) {
    try {
        const response = await axiosPrivate.get('/TAs/submissions/' + auth.user);
        setSubmissions(response.data);
        console.log(response.data)
    } catch (err) {
        console.error(err);
    }
}

async function fetchAllStudents(axiosPrivate, auth, setStudents) {
    try {
        const response = await axiosPrivate.get('/TAs/students/' + auth.user);
        setStudents(response.data);
        console.log(response.data)
    } catch (err) {
        console.error(err);
    }
}

export default function TAStudents() {
    const { auth } = useAuth();
    const [submissions, setSubmissions] = useState([]);
    const [students, setStudents] = useState([]);

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        //fetchStudents(axiosPrivate, auth, setStudentz)
        //fetchReports(axiosPrivate, auth, setReports);
        fetchSubmissions(axiosPrivate, auth, setSubmissions);
        fetchAllStudents(axiosPrivate, auth, setStudents);
    }
        , []);

    return (
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 className="bigPageTitle"> Students </h1>
            <StudentsPage userType="ta" students={submissions} />
            <StudentsPage userType="ta" students={students} />
        </div>
    )
}