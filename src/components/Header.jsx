import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header({ loggedIn }) {

    return (
        <div className="header">
            <div className="name">
                <div className="icon">
                    <img src="/blogging.png" alt="App Icon" />
                </div>
                <h1>Blog In</h1>
            </div>
            <div className="links">
                <Link to="/">Blog</Link>
                {
                    !loggedIn &&
                    <Link to="/login">Log In</Link>
                }
                {
                    !loggedIn &&
                    <Link to="/signup">Sign Up</Link>
                }
                {
                    loggedIn &&
                    <Link to="/logout">Logout</Link>
                }
            </div>
        </div>
    );
}

export default Header;