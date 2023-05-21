import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        // navigate('/login');
    
    }

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/user">Go to the Student page</Link>
            <br />
            <Link to="/evaluator">Go to the Evaluator page</Link>
            <br />
            <Link to="/supervisor">Go to the Supervisor page</Link>
            <br />
            <Link to="/ta">Go to the TA page</Link>
            <br />
            <Link to="/superadmin">Go to the Superadmin page</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home