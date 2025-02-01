import "./landingPage.css"
import { getUserData, setUserData, clearUserData } from "../userdata";
import { useNavigate } from "react-router-dom";


import React, {useState} from 'react';

function LandingPage() {
    const [isSignUp, setIsSignUp] = useState(true)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (ProcessSubmit(isSignUp, username, password, email)) {
            navigate("/dashboard")
        }
    }
    
    function toggleForm(e) {
        e.preventDefault();
        setIsSignUp(!isSignUp);
        setUsername("");
        setPassword("");
        setEmail("");
    }
    
    return (<>
        <div className="header">Thoth</div>
        <div className="landingPageGrid">
            <div className="landingPageForm">
                <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    {isSignUp && <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} required />}
                    <button type ="submit">{isSignUp ? "Sign Up" : "Log In"} </button>
                </form>
                <button className="toggle-btn" onClick={toggleForm}>
                    {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
                </button>
            </div>
            <div className="landingPageFeatures">Join Thoth today! Learn Maths and Science from start to finish.</div>
        </div>
    
    </>);
}


function ProcessSubmit(isSignUp, username, password, email) {
    if (isSignUp) {
        setUserData(username, password, email)
        return true
    }
    else {
        const savedData = getUserData();
        if (username == savedData.username && password == savedData.password) {
            console.log("logged in!");
            return true
        }
        else {
            console.log("Incorrect username or password.")
            return false
        }
    }
}

export default LandingPage;