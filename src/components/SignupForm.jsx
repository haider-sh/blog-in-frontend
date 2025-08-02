import { useState } from "react";
import "../styles/Form.css"
import { useNavigate } from "react-router-dom";

function SignupForm() {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [error, setError] = useState("");

    let navigate = useNavigate();

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!username || !password || !confirmPassword) {
            setError("All fields are required.");
        }
        else if (password !== confirmPassword) {
            setError("Passwords do not match.");
        }
        else {
            setError("");

            let response = await fetch("http://localhost:8080/signup?role=READER", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            let result = await response.json();

            if (result.success) {
                navigate("/login");
            }
            else {
                setError(result.message);
            }
        };
    }

    return (
        <div className="form">
            <h2>Sign up for Blog In</h2>
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
                <div>
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input
                        name="confirmpassword"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                <button onClick={handleSubmit}>Sign Up</button>
                {
                    error &&
                    <div className="error">{error}</div>
                }
            </form>
        </div>
    );
}

export default SignupForm;