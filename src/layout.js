import { Link } from "react-router-dom"
import "./layout.css"

export function Navbar() {
    return (<>
        <div className="navbar">
            <Link to="/dashboard" className="navbarButton">Dashboard</Link>
            <Link to="/learn" className="navbarButton">Learn</Link>
            <Link to="/" className="navbarButton">Settings</Link>
        </div>
    </>)
}