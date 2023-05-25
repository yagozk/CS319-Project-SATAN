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

export default function TAStudents() {
    const { auth } = useAuth();
    const [submissions, setSubmissions] = useState([]);

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        //fetchStudents(axiosPrivate, auth, setStudentz)
        //fetchReports(axiosPrivate, auth, setReports);
        fetchSubmissions(axiosPrivate, auth, setSubmissions);
    }
        , []);

    // const [students] = useState([
    //     { id: 220000, evaluatorID: 1, course: "CS299", name: "Osman Osmanovic", last_submission_date: "2001-01-01", status: "Assigned to course", email: "temp@gmail.com" },
    //     { id: 220001, evaluatorID: 4, course: "CS299", name: "Feridun Feridunovski", last_submission_date: "2001-01-02", status: "Waiting TA", email: "temp@gmail.com" },
    //     { id: 220002, evaluatorID: -1, course: "CS399", name: "Bedük", last_submission_date: "2000-01-01", status: "Decision", email: "temp@gmail.com" },
    //     { id: 220003, evaluatorID: 3, course: "CS399", name: "Jonathan Jonathan", last_submission_date: "2002-03-02", status: "Waiting evaluator", email: "temp@gmail.com" },
    //     { id: 220005, evaluatorID: -1, course: "CS299", name: "Arda Yurdunuçokseven", last_submission_date: "1999-01-01", status: "Requested resubmission", email: "temp@gmail.com" },
    //     { id: 220006, evaluatorID: 2, course: "CS299", name: "Khvicha Kvaratskhelia", last_submission_date: "1999-05-01", status: "Serie A Champion", email: "temp@gmail.com" },
    //     { id: 220007, evaluatorID: -1, course: "CS399", name: "Mahmut Mahmut", last_submission_date: "1999-01-01", status: "Waiting evaluator", email: "temp@gmail.com" },
    // ]);


    return (
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 className="bigPageTitle"> Students </h1>
            <StudentsPage userType="ta" students={submissions} />
        </div>
    )
}