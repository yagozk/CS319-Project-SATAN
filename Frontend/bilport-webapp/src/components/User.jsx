import { Routes, Route } from 'react-router-dom';
import StudentSideBar from '../components/student/StudentSideBar';
import EvaluatorTAInfo from '../components/student/EvaluatorTAInfo';
import Reports from '../components/student/Reports';
import StudentProfile from '../components/student/StudentProfile';
import SupervisorInfo from '../components/student/SupervisorInfo';

const User = () => {
    return (
        <Routes>
            <Route path="/" element={<StudentSideBar />}>
                <Route index element={<Reports />} />
                <Route path="profile" element={<StudentProfile />} />
                <Route path="evaluator_ta_info" element={<EvaluatorTAInfo />} />
                <Route path="supervisor_info" element={<SupervisorInfo />} />
            </Route>
        </Routes>
    )
}

export default User