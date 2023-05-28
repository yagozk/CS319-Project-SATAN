import { useState, useEffect } from "react";
import StudentsPage from "../commonComponents/StudentsPage";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from '../../hooks/useAuth';

async function fetchUserTA(axiosInstance, auth, setTa) {
    try {
        const response = await axiosInstance.get(`/TAs/${auth.user}`);
        setTa(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchSubmissions(axiosPrivate, auth, setSubmissions) {
    try {
        const response = await axiosPrivate.get('/TAs/submissions/' + auth.user);
        setSubmissions(response.data);
        console.log(response.data)
    } catch (err) {
        console.error(err);
    }
}

async function fetchAllStudents(axiosPrivate, course, setStudents) {
    try {
        const response = await axiosPrivate.get('/students/all/' + course);
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
    const [ta, setTa] = useState({});

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        //fetchStudents(axiosPrivate, auth, setStudentz)
        //fetchReports(axiosPrivate, auth, setReports);
        //fetchSubmissions(axiosPrivate, auth, setSubmissions);
        fetchAllStudents(axiosPrivate, "CS399" ,setStudents);
        fetchUserTA(axiosPrivate, auth, setTa);
    }
        , []);

    return (
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 className="bigPageTitle"> Students </h1>
            <StudentsPage userType="ta" students={students} />
        </div>
    )
}