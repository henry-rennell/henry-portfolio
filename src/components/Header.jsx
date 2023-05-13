import "./Header.css"
import { Link, Navigate } from "react-router-dom";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';


export default function Header({toggleDarkMode, isDarkMode}) {
    const handleClick = () => {
        toggleDarkMode();
    }
    let options = [
        <Link to="/"><h2>Henry Rennell's Portfolio</h2></Link>, 
        <Link to="/about"><h2>About</h2></Link>,
        <Link to="/projects"><h2>Projects</h2></Link>,
        <Link to="/skills"><h2>Skills</h2></Link>,
        <Link to="/contact"><h2>Contact</h2></Link>
    ]

    return (
        <header className="header">
            <div className="nav">
            <Link to="/"><h2>Henry Rennell's Portfolio</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/projects"><h2>Projects</h2></Link>
            <Link to="/skills"><h2>Skills</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
            <h2  className="darkmode" onClick={handleClick}>{isDarkMode? "LightMode" : "Dark Mode"}</h2>

            </div>
        </header>
    )
}