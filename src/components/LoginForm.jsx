import { useState } from "react";
import "../styles/Form.css"
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useNavigate, useOutletContext } from "react-router-dom";

function LoginForm() {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    let [isLoggedIn, setIsLoggedIn] = useOutletContext();

    let navigate = useNavigate();

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!username || !password) {
            setError("All fields are required.");
        }
        else {
            setError("")
            setIsLoggedIn(true);
            navigate("/");
        };
    }

    return (
            <div className="form">
                <h2>Log in to your Blog In Account</h2>
                <form action="" method="post">
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            name="username"
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button onClick={handleSubmit}>Log In</button>
                    {
                        error &&
                        <div className="error">{error}</div>
                    }
                </form>
            </div>
    );
}

export default LoginForm;